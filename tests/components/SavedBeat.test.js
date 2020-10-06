import SavedBeats from "../../client/components/SavedBeats"

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
  beforeEach(() => {
    dispatch = jest.fn()
    toggleSavedBeats = jest.fn()
  })

  test("Pressing a delete button calls the deleteBeat function and closes the popup", async () => {

    wrapper = shallow(<SavedBeats
      currentBeat={fakeBeat}
      dispatch={dispatch}
      toggleSavedBeats={toggleSavedBeats}
    />)

    instance = wrapper.instance()
    await instance.componentDidMount()

    instance.handleDelete = jest.fn()
    let button = wrapper.find('.delete-button').at(0)
    button.simulate("click")

    expect(instance.handleDelete).toHaveBeenCalledWith(1)
  })
})