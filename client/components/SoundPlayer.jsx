import React, { Component } from 'react'

export default class SoundPlayer extends Component {

  playAudio = (sound) => {
    let audio = new Audio('audio/' + sound + '.wav')
    audio.load()
    audio.play()
  }
}