import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
document.body.style.backgroundColor = "#121212";

export default class App extends Component {

  render() {
    return (
      <>
        <Navbar/>
        <News/>
      </>
    )
  }
}
