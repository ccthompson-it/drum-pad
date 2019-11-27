import React from 'react'
import { connect } from 'react-redux'

import SoundPlayer from './SoundPlayer'
import Popup from './Popup'

import {setRecording, newRecording} from '../actions'

class Controls extends SoundPlayer {
  constructor(props) {
    super(props)

    this.state = {
      popupShowing: false
    }
  }

  toggleRecord = () => {
    let { dispatch } = this.props
    dispatch(setRecording())
  }

  clearRecording = () => {
    alert('Recording Cleared!')
    let { dispatch } = this.props
    dispatch(newRecording())
  }

  playRecording = (i=0) => {
    let beat = this.props.currentBeat
    this.playAudio(beat[i].sound)

    if(i+1 == beat.length) { return }
    
    let waitTime = beat[i+1].timing - beat[i].timing
    setTimeout(() => this.playRecording(i+1), waitTime)
  }

  togglePopup = () => {
    this.setState({popupShowing: !this.state.popupShowing})
  }

  render() {
    return (
      <React.Fragment>
      <div id="controls">
        <button id="clear" className="round control" onClick={this.clearRecording}>Clear Recording</button>
        <button id="record" className="round control" onClick={this.toggleRecord}>
          <span id={this.props.recording ? "rec-status": ""}>
            <div id="inner-record">
              <p>Record</p>
            </div>
          </span>
        </button>
        <button id="toggle" className="round control" onClick={this.togglePopup}>See Recording</button>
        <button id="play" className="round control" onClick={() => {this.playRecording()}}>Playback Audio</button>
      </div>
      {this.state.popupShowing && <Popup togglePopup={this.togglePopup} />}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    recording: state.recording,
    currentBeat: state.currentBeat
  }
}

export default connect(mapStateToProps)(Controls)