import {SET_RECORDING} from '../actions'

function recording (state = false, action) {
  switch (action.type) {
    case SET_RECORDING:
      return !state

    default:
      return state
  }
}

export default recording