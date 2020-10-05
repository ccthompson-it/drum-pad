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


describe("currentBeat Reducer", () => {
  test("Initial state set to empty array", () => {
    expect.assertions(2)
    let state = currentBeat(undefined, { type: '@@INIT' })
    expect(typeof state).toBe('object')
    expect(state.length).toBe(0)
  })

  test("NEW_BEAT resets state back to an empty array", () => {
    expect.assertions(2)
    let state = currentBeat(mockState, { type: "NEW_BEAT" })
    expect(typeof state).toBe('object')
    expect(state.length).toBe(0)
  })

  test("ADDTO_BEAT adds given sound to the end of the state", () => {
    expect.assertions(3)
    let state = currentBeat(mockState, { type: "ADDTO_BEAT", sound: "basskick" })
    expect(state.length).toBe(3)
    expect(state[2].sound).toBe("basskick")
    expect(typeof state[2].timing).toBe('number')
  })

  test("LOAD_BEAT adds given sound to the end of the state", () => {
    expect.assertions(2)
    let state = currentBeat([], { type: "LOAD_BEAT", beat: mockState })
    expect(state.length).toBe(2)
    expect(state).toBe(mockState)
  })
})