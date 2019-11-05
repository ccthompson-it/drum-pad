export const SET_RECORDING = 'SET_RECORDING'
export const ADDTO_BEAT = 'ADDTO_BEAT'
export const NEW_BEAT = 'NEW_BEAT'

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