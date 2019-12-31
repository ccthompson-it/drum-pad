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
    dispatch = jest.fn()
    map = {}

    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb
    })

    wrapper = mount(<App dispatch={dispatch} />)
    instance = wrapper.instance()
    instance.handleKeyPress = jest.fn()
    await instance.componentDidMount()

    
    map.keypress("3")

    expect(instance.handleKeyPress).toHaveBeenCalled()
  })
})