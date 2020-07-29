import React from 'react'
import { connect } from 'react-redux'

import SoundPlayer from './SoundPlayer'
import Graph from './Graph'

import { setRecording, newRecording } from '../actions'

class Controls extends SoundPlayer {
  constructor(props) {
    super(props)

    this.state = {
      graphShowing: false
    }
  }

  toggleRecord = () => {
    let { dispatch, recording, currentBeat } = this.props
    if (!recording && currentBeat.length > 0) { dispatch(newRecording()) }
    dispatch(setRecording())
  }

  clearRecording = () => {
    alert('Recording Cleared!')
    let { dispatch } = this.props
    dispatch(newRecording())
  }

  toggleGraph = () => {
    this.setState({ graphShowing: !this.state.graphShowing })
  }

  render() {
    return (
      <React.Fragment>
        <div id="controls">
          <button id="clear" className="round control" onClick={this.clearRecording}>Clear Recording</button>
          <button id="record" className="round control" onClick={this.toggleRecord}>
            <span id={this.props.recording ? "rec-status" : ""}>
              <div id="inner-record">
                <p>Record</p>
              </div>
            </span>
          </button>
          <button id="toggle" className="round control" onClick={this.toggleGraph}>See Recording</button>
          <button id="play" className="round control" onClick={() => { this.playRecording() }}>Playback Audio</button>
        </div>
        {this.state.graphShowing && <Graph toggleGraph={this.toggleGraph} />}
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