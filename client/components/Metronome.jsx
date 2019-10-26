import React from 'react'
import SoundPlayer from './SoundPlayer'

class Metronome extends SoundPlayer {

  ticking = false
  interval = null
  sliderValue = 50

  toggleMetronome = () => {
    this.ticking = !this.ticking
    if( this.ticking ) { this.setMetronome() }
    else{ this.clearMetronome() }
  }

  handleSlider = (e) => {
    this.sliderValue = e.target.value
  }

  setMetronome = () => {
    this.interval = setInterval(() => {this.playAudio('softhat')}, (60000/this.sliderValue))
  }

  clearMetronome = () => {
    clearInterval(this.interval)
    this.interval = null
  }

  render() {
    return (
      <div id="ticker-box">
        <div id="slider-box">
          <input type="range" id="slider" min="50" max="400" step="50" value={this.sliderValue} onChange={this.handleSlider} />
          {/* <datalist id="bpms">
            <option value="50"></option>
            <option value="100"></option>
            <option value="150"></option>
            <option value="200"></option>
            <option value="250"></option>
            <option value="300"></option>
            <option value="350"></option>
            <option value="400"></option>
          </datalist> */}
        </div>
        <button id="ticker" className="round control" onClick={this.toggleMetronome}>Metronome</button>
      </div>
    )
  }
}

export default Metronome