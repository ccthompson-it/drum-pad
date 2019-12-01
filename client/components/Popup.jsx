import React from 'react'
import { connect } from 'react-redux'

class Popup extends React.Component {

  totalTime = 0
  startTime = 0

  makeDot = (sound, timing) => {
    // let percentage = (timing - this.startTime) / this.totalTime
    // console.log(percentage)
    let style = {
      paddingLeft: (timing - this.startTime) / (this.totalTime * 0.1) + "vw"
    }
    return <p className="popup-text" style={style}>{sound} {timing}</p>
  }

  render() {
    let { currentBeat, togglePopup } = this.props
    console.log(currentBeat)
    this.totalTime = currentBeat[currentBeat.length-1].timing - currentBeat[0].timing
    this.startTime = currentBeat[0].timing

    return (
      <div className="overlay">
        <div className="popup-box">
          {currentBeat.map(currentSound => this.makeDot(currentSound.sound, currentSound.timing))}
          <p id="popup-close" onClick={togglePopup}>X</p>
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