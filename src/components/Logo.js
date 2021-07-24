import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'


const Navbar = class extends React.Component {

  render() {
    return (
        <div className="logo">
          <h1 className={this.props.color}>rk.de</h1>
          {this.props.size === "long" ? 
          <h2 className={this.props.color}>Kanzlei am Wittenbergplatz</h2>
          : null}
      </div>
    )
  }
}

export default Navbar
