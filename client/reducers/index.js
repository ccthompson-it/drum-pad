import {combineReducers} from 'redux'

import currentBeat from './currentBeat'
import recording from './recording'

export default combineReducers({
    currentBeat,
    recording
})