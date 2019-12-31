import recording from "../../client/reducers/recording"
import currentBeat from "../../client/reducers/currentBeat"

const mockState = [
  {
    sound: "basskick",
    timing: 50
  },
  {
    sound: "snare",
    timing: 100
  }
]


describe("recording Reducer", () => {
  test("Initial state set to false", () => {
    let state = recording(undefined, { type: '@@INIT' })
    expect(state).toBe(false)
  })
  test("SET_RECORDING toggles the state", () => {
    let trueState = recording(false, { type: "SET_RECORDING" })
    expect(trueState).toBe(true)

    let falseState = recording(true, { type: "SET_RECORDING" })
    expect(falseState).toBe(false)
  })
})



describe("currentBeat Reducer", () => {
  test("Initial state set to empty array", () => {
    let state = currentBeat(undefined, { type: '@@INIT' })
    expect(typeof state).toBe('object')
    expect(state.length).toBe(0)
  })

  test("NEW_BEAT resets state back to an empty array", () => {
    let state = currentBeat(mockState, { type: "NEW_BEAT" })
    expect(typeof state).toBe('object')
    expect(state.length).toBe(0)
  })

  test("ADDTO_BEAT adds given sound to the end of the state", () => {
    let state = currentBeat(mockState, { type: "ADDTO_BEAT", sound: "basskick" })
    expect(state.length).toBe(3)
    expect(state[2].sound).toBe("basskick")
    expect(typeof state[2].timing).toBe('number')
  })
})
