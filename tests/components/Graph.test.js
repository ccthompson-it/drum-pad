import Graph from "../../client/components/Graph"

import React from 'react'
import { shallow } from "enzyme"

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

describe("<Graph /> component", () => {
  let dispatch, wrapper, instance
  beforeEach(() => {
    dispatch = jest.fn()
  })

  test("Opening graph with no saved beat displays appropriate message", () => {
    expect.assertions(1)
    wrapper = shallow(<Graph dispatch={dispatch} currentBeat={[]} />)
    instance = wrapper.instance()

    expect(wrapper.contains(<p className="popup-text">There is no Current Recording</p>)).toBe(true)
  })

  test("Opening graph with a saved beat displays a graph with the correct amount of dots on it", () => {
    expect.assertions(1)
    wrapper = shallow(<Graph dispatch={dispatch} currentBeat={fakeBeat} />)
    instance = wrapper.instance()

    expect(wrapper.find('.graph-dot').length).toBe(3)
  })

  test("Pressing close button calls the toggleGraph function", () => {
    expect.assertions(1)
    let toggleGraph = jest.fn()
    wrapper = shallow(<Graph dispatch={dispatch} toggleGraph={toggleGraph} currentBeat={fakeBeat}/>)
    instance = wrapper.instance()

    let button = wrapper.find('#popup-close')
    button.simulate('click')
    expect(toggleGraph).toHaveBeenCalled()
  })
})