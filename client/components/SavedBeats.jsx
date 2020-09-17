import React from 'react'
import { connect } from 'react-redux'
import { getBeats, saveBeat, deleteBeat } from '../apiClient'

import { loadBeat } from '../actions'


class SavedBeats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beats: [],
      beatName: "",
    }
  }

  componentDidMount() {
    getBeats().then(beats => {
      // beats.map(beat => console.log(JSON.parse(beat.beat)))
      this.setState({
        beats: beats.map(beat => {
          return {
            id: beat.id,
            beatName: beat.beat_name,
            beat: JSON.parse(beat.beat)
          }
        })
      })
    })
  }

  handleDelete = (id) => {
    deleteBeat(id)
    this.props.toggleSavedBeats()
  }

  handleLoad = (beat) => {
    const { toggleSavedBeats, dispatch } = this.props
    dispatch(loadBeat(beat))
    toggleSavedBeats()
  }

  handleSave = () => {
    const { toggleSavedBeats, currentBeat } = this.props
    const { beatName } = this.state

    if (!currentBeat.length) {
      alert("There is Nothing Recorded")
    }

    else if (this.state.beats.length >= 5) {
      alert("There are Already 5 Beats Saved!")
    }

    else if (beatName.replace(/\s/g, "") === "") {
      alert("Please enter a beat name")
    }

    else {
      saveBeat(currentBeat, beatName)
      toggleSavedBeats()
    }
  }

  handleInput = (e) => {
    if (this.state.beatName.length > 15) {
      return
    }
    this.setState({ beatName: e.target.value })
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
              {this.state.beats.length > 0 && this.state.beats.map(({ beat, beatName, id }) =>
                <tr key={id}>
                  <td>{beatName}</td>
                  <td>{(beat[beat.length - 1].timing - beat[0].timing) / 1000} seconds</td>
                  <td>
                    <span className="beat-option load-button" onClick={() => this.handleLoad(beat)}>Load</span>
                    <span className="beat-option delete-button" onClick={() => this.handleDelete(id)}>Delete</span>
                  </td>
                </tr>
              )}
            </tbody>

          </table>
          <p id="popup-close" onClick={toggleSavedBeats}>X</p>
          <div id="save-bar">
            <p id="save-button" onClick={this.handleSave}>Save Current Beat</p>
            <input id="save-input" placeholder="Beat Name" onChange={this.handleInput} value={this.state.beatName}></input>
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

export default connect(mapStateToProps)(SavedBeats)