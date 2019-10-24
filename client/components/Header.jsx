import React, { Component } from 'react'

import Controls from './Controls'

class Header extends Component {
  render() {
    return (
      <header>
        <h1 id="main-title">Beat Pad</h1>
        <Controls />
      </header>
    )
  }
}

export default Header