import {CHANGE_BEAT} from '../actions'

function currentBeat (state = [], action) {
  switch (action.type) {
    case CHANGE_BEAT:
      return action.newBeat

    default:
      return state
  }
}

export default currentBeat