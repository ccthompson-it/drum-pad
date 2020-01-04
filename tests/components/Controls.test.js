import Controls from "../../client/components/Controls"

import React from 'react'
import { shallow, mount } from "enzyme"

jest.mock('react-redux', () => {
  return {
    connect: () => {
      return (component) => component
    }
  }
})

describe("<Controls /> component", () => {
  let dispatch, wrapper, instance
  beforeEach(async () => {
    dispatch = jest.fn()
    wrapper = shallow(<Controls dispatch={dispatch} />)
    instance = wrapper.instance()
    await instance.constructor()
  })

  test("Default popup state is false", () => {
    expect(instance.state.popupShowing).toBe(false)
  })

  test("togglePopup toggles the popup", () => {
    expect(instance.state.popupShowing).toBe(false)
    instance.togglePopup()
    expect(instance.state.popupShowing).toBe(true)
    instance.togglePopup()
    expect(instance.state.popupShowing).toBe(false)
  })
})