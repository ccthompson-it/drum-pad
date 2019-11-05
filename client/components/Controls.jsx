import React from 'react'
import SoundPlayer from './SoundPlayer'
import { connect } from 'react-redux'

import {setRecording, newRecording} from '../actions'

class Controls extends SoundPlayer {
  
  toggleRecord = () => {
    let { dispatch } = this.props
    dispatch(setRecording())
  }

  clearRecording = () => {
    let { dispatch } = this.props
    dispatch(newRecording())
  }

  render() {
    return (
      <div id="controls">
        <button id="clear" className="round control" onClick={this.clearRecording}>Clear Recording</button>
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