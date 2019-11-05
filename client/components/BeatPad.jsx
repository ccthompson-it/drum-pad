import React from 'react'
import {connect} from 'react-redux'

import SoundPlayer from './SoundPlayer'

class BeatPad extends SoundPlayer {
  render() {
    return (
      <div id="sound-pad">
        <button className="sound round" onClick={() => this.playAudio("basskick")}>Basskick (0)</button>
        <button className="sound round" onClick={() => this.playAudio("kick")}>Kick (1)</button>
        <button className="sound round" onClick={() => this.playAudio("snare")}>Snare (2)</button>
        <button className="sound round" onClick={() => this.playAudio("clap")}>Clap (3)</button>
        <button className="sound round" onClick={() => this.playAudio("snap")}>snap (4)</button>
        <button className="sound round" onClick={() => this.playAudio("cowbell")}>Cowbell (5)</button>
        <button className="sound round" onClick={() => this.playAudio("crash")}>Crash (6)</button>
        <button className="sound round" onClick={() => this.playAudio("hat")}>Hat (7)</button>
        <button className="sound round" onClick={() => this.playAudio("softhat")}>Soft Hat (8)</button>
        <button className="sound round" onClick={() => this.playAudio("coconut")}>Coconut (9)</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recording: state.recording
  }
}

export default connect(mapStateToProps)(BeatPad)