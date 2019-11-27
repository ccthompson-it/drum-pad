import React from 'react'
import { connect } from 'react-redux'

class Popup extends React.Component {
  render() {
    let { currentBeat, togglePopup } = this.props
    console.log(currentBeat)
    return (
      <div className="overlay">
        <div className="popup-box">
          {currentBeat.map(currentSound => <p className="popup-text">{currentSound.sound}, {currentSound.timing}</p>)}
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