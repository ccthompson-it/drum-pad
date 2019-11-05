import React from 'react'
import SoundPlayer from './SoundPlayer'

class Metronome extends SoundPlayer {

  ticking = false
  interval = null
  bpmValue = 50

  toggleMetronome = () => {
    this.ticking = !this.ticking
    if (this.ticking) { this.setMetronome() }
    else { this.clearMetronome() }
  }

  handleDropdown = (e) => {
    this.bpmValue = e.target.value
  }

  setMetronome = () => {
    this.interval = setInterval(() => { this.playAudio('softhat') }, (60000 / this.bpmValue))
  }

  clearMetronome = () => {
    clearInterval(this.interval)
    this.interval = null
  }

  render() {
    return (
      <div id="ticker-box">
        <select onChange={this.handleDropdown}>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="150">150</option>
          <option value="200">200</option>
          <option value="250">250</option>
          <option value="300">300</option>
          <option value="350">350</option>
          <option value="400">400</option>
        </select>
        <button id="ticker" className="round control" onClick={this.toggleMetronome}>Metronome</button>
      </div>
    )
  }
}

export default Metronome