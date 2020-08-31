import React from 'react'
import { connect } from 'react-redux'
import { getBeats, saveBeat } from '../apiClient'

import { loadBeat } from '../actions'


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

  handleDelete = (id) => {
    console.log("Pressed!", id)
  }

  handleLoad = (beat) => {
    const { dispatch } = this.props
    dispatch(loadBeat(beat))
    console.log("Pressed!", beat)
  }

  handleSave = () => {
    const { toggleSavedBeats, currentBeat } = this.props
    saveBeat(currentBeat)
    toggleSavedBeats()
  }

  render() {
    const { toggleSavedBeats } = this.props
    return (
      <div className="overlay">
        <div className="popup-box">
          <table>
            <thead>
              <tr>
                <th>Beat Name</th>
                <th>Beat Length</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {this.state.beats.length > 0 && this.state.beats.map(({ beat, beatName }, id) =>
                <tr key={id}>
                  <td>{beatName}</td>
                  <td>{(beat[beat.length - 1].timing - beat[0].timing) / 1000} seconds</td>
                  <td>
                    <span className="beat-option" onClick={() => this.handleLoad(beat)}>Load</span>
                    <span className="beat-option" onClick={() => this.handleDelete(id)}>Delete</span>
                  </td>
                </tr>
              )}
            </tbody>

          </table>
          <p id="popup-close" onClick={toggleSavedBeats}>X</p>
          <p id="save-button" onClick={this.handleSave}>Save Current Beat</p>
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