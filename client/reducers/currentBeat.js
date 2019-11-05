import {NEW_BEAT, ADDTO_BEAT} from '../actions'

function currentBeat (state = [], action) {
  switch (action.type) {
    case NEW_BEAT:
      return []
    case ADDTO_BEAT:
      return [
        ...state,
        {
          sound: action.sound,
          timing: Date.now()
        }
      ]
    default:
      return state
  }
}

export default currentBeat