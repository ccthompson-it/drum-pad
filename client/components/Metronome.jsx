import React, { Component } from 'react'

class Metronome extends Component {
  render() {
    return (
      <div id="ticker-box">
        <div id="slider-box">
          <input type="range" id="slider" list="bpms" min="50" max="400" step="50" />
        <datalist id="bpms">
            <option value="50"></option>
            <option value="100"></option>
            <option value="150"></option>
            <option value="200"></option>
            <option value="250"></option>
            <option value="300"></option>
            <option value="350"></option>
            <option value="400"></option>
          </datalist>
        </div>
        <button id="ticker" className="round control">Metronome</button>
      </div>
    )
  }
}

export default Metronome