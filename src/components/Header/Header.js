import React from 'react'
import './Header.scss'

export default class Header extends React.Component {
  render () {

    return (
      <header className='header'>
        <a href='/' className='logo'>React Menu Demo</a>
      </header>
    )
  }
}
