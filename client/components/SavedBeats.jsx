import React from 'react'
import { connect } from 'react-redux'
import { getBeats } from '../apiClient'


class SavedBeats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beats: []
    }
  }

  componentDidMount() {
    getBeats().then(beats => {
      // beats.map(beat => console.log(JSON.parse(beat.beat)))
      this.setState({
        beats: beats.map(beat => {
          return {
            beatName: beat.beat_name,
            beat: JSON.parse(beat.beat)
          }
        })
      })
    })
  }

  render() {
    let { toggleSavedBeats } = this.props
    return (
      <div className="overlay">
        <div className="popup-box">
          <p className="popup-text">Saved Beats:</p>
          {this.state.beats.length > 0 && this.state.beats.map((beat, key) =>
            <p key = {key} className="popup-text">{beat.beatName}: {(beat.beat[beat.beat.length - 1].timing - beat.beat[0].timing) / 1000} seconds long</p>
          )}
          <p id="popup-close" onClick={toggleSavedBeats}>X</p>
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

export default connect(mapStateToProps)(SavedBeats)