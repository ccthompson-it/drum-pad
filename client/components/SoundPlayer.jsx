import React, { Component } from 'react'

import {addToBeat} from '../actions'

class SoundPlayer extends Component {

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