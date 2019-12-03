import React from 'react'
import { connect } from 'react-redux'

const soundByte = {
  basskick: 9,
  kick: 8,
  snare: 7,
  clap: 6,
  snap: 5,
  cowbell: 4,
  crash: 3,
  hat: 2,
  softhat: 1,
  coconut: 0
}

class Popup extends React.Component {

  totalTime = 0
  startTime = 0

  makeDot = (sound, timing) => {
    let percentage = (timing - this.startTime) / this.totalTime
    console.log(percentage)

    let num = soundByte[sound]
      let style = {
        marginLeft: 45 * ((timing - this.startTime) / (this.totalTime)) + "vw",
        marginTop: 6.45 * num + "vh",
        left: "29vw",
      }
    return (
      <React.Fragment>
        {/* <p className="popup-text" style={style}>{sound} {timing}</p> */}
        <p className="test-dot" style={style}></p>
      </React.Fragment>
    )
  }

  render() {
    let { currentBeat, togglePopup } = this.props
    console.log(currentBeat)
    this.totalTime = currentBeat[currentBeat.length - 1].timing - currentBeat[0].timing
    this.startTime = currentBeat[0].timing

    return (
      <div className="overlay">
        <div className="popup-box">
          <div className="graph-wrapper">
            <div className="sound-labels">
              <p>Coconut</p>
              <p>Soft Hat</p>
              <p>Hat</p>
              <p>Crash</p>
              <p>Cowbell</p>
              <p>Snap</p>
              <p>Clap</p>
              <p>Snare</p>
              <p>Kick</p>
              <p>Bass Kick</p>
            </div>
            <div className="graph">
              {currentBeat.map(currentSound => this.makeDot(currentSound.sound, currentSound.timing))}
              <p id="popup-close" onClick={togglePopup}>X</p>
            </div>
          </div>

          <div className="time-labels">
            <p>0</p>
            <p>{this.totalTime / 1000}</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentBeat: state.currentBeat
  }
}

export default connect(mapStateToProps)(Popup)