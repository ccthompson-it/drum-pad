import Controls from "../../client/components/Controls"

import React from 'react'
import { shallow, mount } from "enzyme"

window.alert = jest.fn()

jest.mock('react-redux', () => {
  return {
    connect: () => {
      return (component) => component
    }
  }
})

describe("<Controls /> component", () => {
  let dispatch, wrapper, instance, window
  beforeEach(() => {
    dispatch = jest.fn()
    wrapper = shallow(<Controls dispatch={dispatch} />)
    instance = wrapper.instance()
  })

  test("Default popup state is false", () => {
    expect.assertions(1)
    expect(instance.state.popupShowing).toBe(false)
  })

  test("pressing the 'see recording' button toggles the popup", () => {
    expect.assertions(3)
    let button = wrapper.find("button").at(2)
    expect(instance.state.popupShowing).toBe(false)
    button.simulate("click")
    expect(instance.state.popupShowing).toBe(true)
    button.simulate("click")
    expect(instance.state.popupShowing).toBe(false)
  })

  test("pressing the 'clear' button calls dispatch once with the clear action", () => {
    expect.assertions(2)
    let clearButton = wrapper.find("button").at(0)
    clearButton.simulate("click")
    expect(dispatch.mock.calls.length).toBe(1)
    expect(dispatch.mock.calls[0][0].type).toBe("NEW_BEAT")
  })
})
