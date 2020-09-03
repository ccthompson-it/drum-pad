import React, { Component } from 'react'

import {addToBeat} from '../actions'

class SoundPlayer extends Component {

  playRecording = (i = 0) => {
    let beat = this.props.currentBeat
    if (beat.length > 0) {
      this.playAudio(beat[i].sound)

      if (i + 1 == beat.length) { return }

      let waitTime = beat[i + 1].timing - beat[i].timing
      setTimeout(() => this.playRecording(i + 1), waitTime)
    }
    else {
      alert("There is Nothing Recorded!")
    }
  }
  
  playAudio = (sound) => {
    if(this.props.recording) {
      this.props.dispatch(addToBeat(sound))
    }
    let audio = new Audio('audio/' + sound + '.wav')
    audio.load()
    audio.play()
  }
}

export default SoundPlayer