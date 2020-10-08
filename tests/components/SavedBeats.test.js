import SavedBeats from "../../client/components/SavedBeats"
import apiClient from '../../client/apiClient'

import React from 'react'
import { shallow } from "enzyme"

window.alert = jest.fn()

jest.mock('react-redux', () => {
  return {
    connect: () => {
      return (component) => component
    }
  }
})

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

jest.mock('../../client/apiClient', () => {
  return {
    getBeats: jest.fn(() => {
      return Promise.resolve([
        { id: 1, beat_name: 'Cool Beat', beat: '[{"sound":"kick","timing":1595732534143},{"sound":"softhat","timing":1595732534583}]' },
        { id: 2, beat_name: 'Cooler Beat', beat: '[{"sound":"basskick","timing":1595732636364},{"sound":"clap","timing":1595732636792}]' }
      ])
    }),
    deleteBeat: jest.fn(() => {
      return Promise.resolve(true)
    }),
    saveBeat: jest.fn(() => {
      return Promise.resolve(true)
    })
  }
})

describe("<SavedBeats /> component", () => {
  let dispatch, toggleSavedBeats, wrapper, instance
  beforeEach(async () => {
    dispatch = jest.fn()
    toggleSavedBeats = jest.fn()
    wrapper = shallow(<SavedBeats
      currentBeat={fakeBeat}
      dispatch={dispatch}
      toggleSavedBeats={toggleSavedBeats}
    />)

    instance = wrapper.instance()
    await instance.componentDidMount()
  })

  test("Pressing a delete button calls the deleteBeat function and closes the popup", () => {
    expect.assertions(2)
    apiClient.deleteBeat = jest.fn()
    let button = wrapper.find('.delete-button').at(0)
    button.simulate("click")

    expect(apiClient.deleteBeat).toHaveBeenCalledWith(1)
    expect(toggleSavedBeats).toHaveBeenCalled()
  })

  test("Pressing a load button calls dispatch with the correct action and beat and closes the popup", () => {
    expect.assertions(4)
    let button = wrapper.find('.load-button').at(1)
    button.simulate('click')

    expect(dispatch).toHaveBeenCalled()
    expect(dispatch.mock.calls[0][0].type).toBe('LOAD_BEAT')
    expect(dispatch.mock.calls[0][0].beat[0].sound).toBe('basskick')
    expect(toggleSavedBeats).toHaveBeenCalled()
  })

  test("Pressing the save button with nothing recorded alerts the user", () => {

    wrapper.setProps({currentBeat: []})
    expect.assertions(3)
    
    window.alert.mockClear()
    expect(window.alert).not.toHaveBeenCalled()

    let button = wrapper.find('#save-button')
    button.simulate('click')

    expect(window.alert).toHaveBeenCalled()
    expect(dispatch).not.toHaveBeenCalled()
  })

  test("Pressing the save button 5 beats already recorded alerts the user", () => {

    instance.state.beats = [{}, {}, {}, {}, {}]
    expect.assertions(3)
    
    window.alert.mockClear()
    expect(window.alert).not.toHaveBeenCalled()

    let button = wrapper.find('#save-button')
    button.simulate('click')

    expect(window.alert).toHaveBeenCalledWith("There are Already 5 Beats Saved!")
    expect(dispatch).not.toHaveBeenCalled()
  })

  test("Pressing the save button with no name for the beat alerts the user", () => {

    expect.assertions(3)
    
    window.alert.mockClear()
    expect(window.alert).not.toHaveBeenCalled()

    let button = wrapper.find('#save-button')
    button.simulate('click')

    expect(window.alert).toHaveBeenCalledWith("Please enter a beat name")
    expect(dispatch).not.toHaveBeenCalled()
  })

  test("Pressing the save button with a beat name entered calls the saveBeat function and closes the popup", () => {

    expect.assertions(2)

    instance.state.beatName = "Cool Beat"
    apiClient.saveBeat = jest.fn()

    let button = wrapper.find('#save-button')
    button.simulate('click')

    expect(apiClient.saveBeat).toHaveBeenCalledWith(fakeBeat, "Cool Beat")
    expect(toggleSavedBeats).toHaveBeenCalled()
  })

  test("Pressing the save button with a beat name entered calls the saveBeat function and closes the popup", () => {

    expect.assertions(2)

    instance.state.beatName = "Cool Beat"
    apiClient.saveBeat = jest.fn()

    let button = wrapper.find('#save-button')
    button.simulate('click')

    expect(apiClient.saveBeat).toHaveBeenCalledWith(fakeBeat, "Cool Beat")
    expect(toggleSavedBeats).toHaveBeenCalled()
  })
})