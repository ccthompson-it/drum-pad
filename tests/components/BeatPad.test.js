import BeatPad from "../../client/components/BeatPad"

import React from 'react'
import { shallow } from "enzyme"

jest.mock('react-redux', () => {
  return {
    connect: () => {
      return (component) => component
    }
  }
})

describe("<BeatPad /> component", () => {
  let dispatch, wrapper, instance
  beforeEach(() => {
    dispatch = jest.fn()
    wrapper = shallow(<BeatPad dispatch={dispatch} />)
    instance = wrapper.instance()
  })

  test("Pressing a button calls the playAudio function with the right sound", () => {
    instance.playAudio = jest.fn()
    let button = wrapper.find('button').at(0)
    button.simulate("click")
    expect(instance.playAudio).toHaveBeenCalledWith("basskick")
  })
})
