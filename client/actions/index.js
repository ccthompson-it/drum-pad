export const SET_RECORDING = 'SET_RECORDING'
export const ADDTO_BEAT = 'ADDTO_BEAT'
export const NEW_BEAT = 'NEW_BEAT'
export const LOAD_BEAT = 'LOAD_BEAT'

export const setRecording = () => {
  return {
    type: SET_RECORDING
  }
}

export const newRecording = () => {
  return {
    type: NEW_BEAT
  }
}

export const addToBeat = (sound) => {
  return {
    type: ADDTO_BEAT,
    sound
  }
}

export const loadBeat = (beat) => {
  return {
    type: LOAD_BEAT,
    beat
  }
}
