import Controls from "../../client/components/Controls"

import React from 'react'
import { shallow } from "enzyme"

window.alert = jest.fn()

const fakeBeat = [
  {
    sound: "basskick",
    timing: 500
  },
  {
    sound: "snare",
    timing: 1000
  }, 
  {
    sound: "basskick",
    timing: 1500
  }
]

jest.mock('react-redux', () => {
  return {
    connect: () => {
      return (component) => component
    }
  }
})

describe("<Controls /> component", () => {
  let dispatch, wrapper, instance
  beforeEach(() => {
    dispatch = jest.fn()
    wrapper = shallow(<Controls dispatch={dispatch} currentBeat={fakeBeat} recording={false}/>)
    instance = wrapper.instance()
  })

  test("Default graph popup state is false", () => {
    expect.assertions(1)
    expect(instance.state.graphShowing).toBe(false)
  })

  test("pressing the 'see recording' button toggles the graph popup", () => {
    expect.assertions(3)
    let button = wrapper.find("#toggle")
    expect(instance.state.graphShowing).toBe(false)
    button.simulate("click")
    expect(instance.state.graphShowing).toBe(true)
    button.simulate("click")
    expect(instance.state.graphShowing).toBe(false)
  })

  test("Default saved beats popup state is false", () => {
    expect.assertions(1)
    expect(instance.state.savedBeatsShowing).toBe(false)
  })

  test("pressing the 'saved beats' button toggles the saved beats popup", () => {
    expect.assertions(3)
    let button = wrapper.find("#saved")
    expect(instance.state.savedBeatsShowing).toBe(false)
    button.simulate("click")
    expect(instance.state.savedBeatsShowing).toBe(true)
    button.simulate("click")
    expect(instance.state.savedBeatsShowing).toBe(false)
  })

  test("pressing the 'clear' button calls dispatch once with the clear action", () => {
    expect.assertions(2)
    let clearButton = wrapper.find("#clear")
    clearButton.simulate("click")
    expect(dispatch.mock.calls.length).toBe(1)
    expect(dispatch.mock.calls[0][0].type).toBe("NEW_BEAT")
  })

  test("pressing the 'play' button calls the playAudio function", () => {
    jest.useFakeTimers()
    expect.assertions(1)
    instance.playAudio = jest.fn()
    let playButton = wrapper.find("#play")
    playButton.simulate("click")
    jest.runAllTimers()
    expect(instance.playAudio.mock.calls.length).toBe(3)
  })

  test("if there is nothing recorded, the 'play' button alerts user", () => {
    expect.assertions(2)
    window.alert.mockClear()
    expect(window.alert).not.toHaveBeenCalled()

    wrapper.setProps({currentBeat: []})
    let playButton = wrapper.find("#play")
    playButton.simulate("click")

    expect(window.alert).toHaveBeenCalled()
  })

  test("'record' button calls dispatch twice if not already recording", () => {
    let recordButton = wrapper.find("#record")
    recordButton.simulate("click")
    expect(dispatch.mock.calls.length).toBe(2)
    expect(dispatch.mock.calls[0][0].type).toBe("NEW_BEAT")
    expect(dispatch.mock.calls[1][0].type).toBe("SET_RECORDING")
  })

  test("'record' button calls dispatch once if already recording", () => {
    wrapper.setProps({recording: true, currentBeat: fakeBeat})
    let recordButton = wrapper.find("#record")
    recordButton.simulate("click")
    expect(dispatch.mock.calls.length).toBe(1)
    expect(dispatch.mock.calls[0][0].type).toBe("SET_RECORDING")
  })
})