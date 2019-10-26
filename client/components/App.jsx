import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import KeyboardEventHandler from 'react-keyboard-event-handler'

import SoundPlayer from './SoundPlayer'

import Header from './Header'
import BeatPad from './BeatPad'
import Metronome from './Metronome'
import Footer from './Footer'

class App extends SoundPlayer {

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress)
  }

  handleKeyPress = ({ key }) => {
    if (isNaN(key)) { return }
    console.log(key)
    const keyMatches = ['basskick', 'kick', 'snare', 'clap', 'snap', 'cowbell', 'crash', 'hat', 'softhat', 'coconut']
    this.playAudio(keyMatches[key])
  }

  render() {
    return (
      <Fragment>
        {/* <KeyboardEventHandler handleKeys={['numeric']} onKeyEvent={(key, e) => this.handleKeyPress(key)}> */}
        <Header />
        <BeatPad />
        <Metronome />
        <Footer />
        {/* </KeyboardEventHandler> */}
      </Fragment>
    )
  }
}

export default connect()(App)
