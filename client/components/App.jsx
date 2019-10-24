import React, { Component, Fragment } from 'react'

import Header from './Header'
import BeatPad from './BeatPad'
import Metronome from './Metronome'
import Footer from './Footer'

class App extends Component {

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

export default App
