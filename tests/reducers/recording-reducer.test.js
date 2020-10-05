import recording from "../../client/reducers/recording"


describe("recording Reducer", () => {

  test("Initial state set to false", () => {
    expect.assertions(1)
    let state = recording(undefined, { type: '@@INIT' })
    expect(state).toBe(false)
  })

  test("SET_RECORDING toggles the state", () => {
    expect.assertions(2)
    let trueState = recording(false, { type: "SET_RECORDING" })
    expect(trueState).toBe(true)

    let falseState = recording(true, { type: "SET_RECORDING" })
    expect(falseState).toBe(false)
  })
})