import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-scroll'

import './HomeContent.css';

class HomeContent extends Component {
  render() {
    const section = {
      title: "Aroma",
      subtitle: "O teu conforto"
    }
    return (
      <div id="home_content" className="fullHeight lineHeight bgColor">
        <div className="home__text">
          <h1>{section.title}</h1>
          <h2>{section.subtitle}</h2>
        </div>
      </div>
    )
  }
}
export default HomeContent
