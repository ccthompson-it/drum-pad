import React from 'react'
import SoundPlayer from './SoundPlayer'

class Controls extends SoundPlayer {
  state = {
    recording: false
  }
  
  toggleRecord = () => {
    this.setState({
      recording: !this.state.recording
    })
  }

  render() {
    return (
      <div id="controls">
        <button id="clear" className="round control">Clear Recording</button>
        <button id="record" className="round control" onClick={this.toggleRecord}>
          <span id={this.state.recording ? "rec-status": ""}>
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

export default Controls