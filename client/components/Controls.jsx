import React from 'react'
import SoundPlayer from './SoundPlayer'
import { connect } from 'react-redux'

import {setRecording} from '../actions'

class Controls extends SoundPlayer {
  
  toggleRecord = () => {
    let { dispatch } = this.props
    dispatch(setRecording())
  }

  render() {
    return (
      <div id="controls">
        <button id="clear" className="round control">Clear Recording</button>
        <button id="record" className="round control" onClick={this.toggleRecord}>
          <span id={this.props.recording ? "rec-status": ""}>
            <div id="inner-record">
              <p>Record</p>
            </div>
          </span>
        </button>
        <button id="play" className="round control">Playback Audio</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recording: state.recording
  }
}

export default connect(mapStateToProps)(Controls)