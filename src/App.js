import React, { Component } from 'react'
import Categories from './components/Categories';
import Header from './components/Header';
import Navbar from './components/Navbar'
import News from './components/News'
document.body.style.backgroundColor = "#121212";

export default class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Header/>
        <Categories/>
        <News pageSize={12} country="us" category={"general"}/>
      </>
    )
  }
}
