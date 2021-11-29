import React, { Component } from 'react'
import Categories from './components/Categories';
import Header from './components/Header';
import Navbar from './components/Navbar'
import News from './components/News'
import {
  Routes,
  Route
} from "react-router-dom";
document.body.style.backgroundColor = "#121212";

export default class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Header />
        <Categories />
        <Routes>
          <Route exact path="/" element={<News key = "General" pageSize={12} country="us" category={"general"} />} />
          <Route exact path="/general" element={<News key = "General" pageSize={12} country="us" category={"general"} />} />
          <Route exact path="/sports" element={<News key = "Sports" pageSize={12} country="us" category={"sports"} />} />
          <Route exact path="/tech" element={<News key = "Tech" pageSize={12} country="us" category={"technology"} />} />
          <Route exact path="/science" element={<News key = "Science" pageSize={12} country="us" category={"science"} />} />
          <Route exact path="/business" element={<News key = "Business" pageSize={12} country="us" category={"business"} />} />
          <Route exact path="/health" element={<News key = "Health" pageSize={12} country="us" category={"health"} />} />
          <Route exact path="/entertainment" element={<News key = "Entertainment" pageSize={12} country="us" category={"entertainment"} />} />
        </Routes>
        
      </>
    )
  }
}
