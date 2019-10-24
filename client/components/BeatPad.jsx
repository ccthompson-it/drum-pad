import React, { Component, Fragment } from 'react'

class BeatPad extends Component {
  render() {
    return (
      <div id="sound-pad">
        <button className="sound round" id="basskick">Basskick (0)</button>
        <button className="sound round" id="kick">Kick (1)</button>
        <button className="sound round" id="snare">Snare (2)</button>
        <button className="sound round" id="clap">Clap (3)</button>
        <button className="sound round" id="snap">snap (4)</button>
        <button className="sound round" id="cowbell">Cowbell (5)</button>
        <button className="sound round" id="crash">Crash (6)</button>
        <button className="sound round" id="hat">Hat (7)</button>
        <button className="sound round" id="softhat">Soft Hat (8)</button>
        <button className="sound round" id="coconut">Coconut (9)</button>
      </div>
    )
  }
}

export default BeatPad