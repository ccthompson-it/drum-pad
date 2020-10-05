import * as actions from "../../client/actions"

test('setRecording', () => {
  expect.assertions(1)
  let action = actions.setRecording()
  expect(action.type).toBe("SET_RECORDING")
})

test('newRecording', () => {
  expect.assertions(1)
  let action = actions.newRecording()
  expect(action.type).toBe("NEW_BEAT")
})

test('addToBeat', () => {
  expect.assertions(2)
  let action = actions.addToBeat("BassKick")
  expect(action.type).toBe("ADDTO_BEAT")
  expect(action.sound).toBe("BassKick")
})

test('loadBeat', () => {
  expect.assertions(2)
  let action = actions.loadBeat("Snare")
  expect(action.type).toBe("LOAD_BEAT")
  expect(action.beat).toBe("Snare")
})