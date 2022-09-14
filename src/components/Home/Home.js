import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import HomeContent from './HomeContent';
import AboutUs from '../AboutUs/AboutUs';
import Candles from '../Candles/Candles';


class Home extends Component {
  render() {
    return (
      <div id="home">
        <NavBar />  
        <HomeContent />
        <AboutUs />
        <Candles />
      </div>
    )
  }
}
export default Home
