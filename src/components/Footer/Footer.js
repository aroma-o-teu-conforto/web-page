import React, { Component } from 'react';
import WhatsAppBtn from '../Buttons/WhatsAppBtn/WhatsAppBtn';
import InstagramBtn from '../Buttons/InstagramBtn/InstagramBtn';
import FacebookBtn from '../Buttons/FacebookBtn/FacebookBtn';

import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <div id="footer">
        <div className="social">
            <WhatsAppBtn />
            <InstagramBtn />
            <FacebookBtn />
        </div>
      </div>
    )
  }
}
export default Footer
