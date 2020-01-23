import App from "../../client/components/App"

import React from 'react'
import { shallow, mount } from "enzyme"

jest.mock('react-redux', () => {
  return {
    connect: () => {
      return (component) => component
    }
  }
})

describe("<App /> component", () => {
  let dispatch, wrapper, instance, map
    
  test("Pressing a key calls the handleKeyPress function", async () => {
    expect.assertions(1)
    dispatch = jest.fn()
    map = {}

    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb
    })

    wrapper = shallow(<App dispatch={dispatch} />)
    instance = wrapper.instance()
    instance.handleKeyPress = jest.fn()
    await instance.componentDidMount()

    
    map.keypress("0")

    expect(instance.handleKeyPress).toHaveBeenCalled()
  })

  test("handleKeyPress function only plays audio on number key presses", () => {
    expect.assertions(2)
    dispatch = jest.fn()
    wrapper = shallow(<App dispatch={dispatch} />)
    let instance = wrapper.instance()
    instance.playAudio = jest.fn()

    instance.handleKeyPress({key: "a"})
    expect(instance.playAudio).not.toHaveBeenCalled()

    instance.handleKeyPress({key: "3"})
    expect(instance.playAudio).toHaveBeenCalled()
  })
})