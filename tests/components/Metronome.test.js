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

  test("Choosing an option changes the bpm", () => {
    expect.assertions(1)
    let dropDown = wrapper.find("select")
    dropDown.simulate("change", {target: {value: 100}})

    expect(instance.bpmValue).toBe(100)
  })

  test("Button toggles metronome on and off", () => {
    expect.assertions(4)
    let button = wrapper.find("button")
    button.simulate("click")

    expect(instance.ticking).toBeTruthy()
    expect(instance.interval).not.toBe(null)

    button.simulate("click")

    expect(instance.ticking).not.toBeTruthy()
    expect(instance.interval).toBe(null)
  })
})
