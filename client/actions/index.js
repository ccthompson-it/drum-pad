export const CHANGE_BEAT = 'CHANGE_BEAT'

export const changePage = (newBeat) => {
  return {
    type: CHANGE_BEAT,
    newBeat
  }
}