import React, { Component } from 'react'

class Controls extends Component {
  render() {
    return (
      <div id="controls">
        <button id="clear" className="round control">Clear Recording</button>
        <button id="record" className="round control">
          <span>
            <div id="inner-record">
              <p>Record</p>
            </div>
          </span>
        </button>
        <button id="play" className="round control">Playback Audio</button>
      </div>
    )
  }
}

export default Controls