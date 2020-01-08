import Metronome from "../../client/components/Metronome"

import React from 'react'
import { shallow } from "enzyme"


describe("<Metronome /> component", () => {
  let dispatch, wrapper, instance
  beforeEach(() => {
    dispatch = jest.fn()
    wrapper = shallow(<Metronome dispatch={dispatch} />)
    instance = wrapper.instance()
  })

  test("Default values set correctly", () => {
    expect.assertions(3)
    expect(instance.ticking).toBe(false)
    expect(instance.interval).toBe(null)
    expect(instance.bpmValue).toBe(50)
  })
})
