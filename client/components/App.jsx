import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import SoundPlayer from './SoundPlayer'

import Header from './Header'
import BeatPad from './BeatPad'
import Metronome from './Metronome'
import Footer from './Footer'

const audioNames = ['basskick', 'kick', 'snare', 'clap', 'snap', 'cowbell', 'crash', 'hat', 'softhat', 'coconut']

class App extends SoundPlayer {

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress)
    audioNames.map(sound => {
      let audio = new Audio('audio/' + sound + '.wav')
      audio.load()
    })
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress)
  }

  handleKeyPress = ({ key }) => {
    if (isNaN(key)) { return }
    this.playAudio(audioNames[key])
  }

  render() {
    return (
      <Fragment>
        <Header />
        <BeatPad />
        <Metronome />
        <Footer />
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    recording: state.recording
  }
}

export default connect(mapStateToProps)(App)
