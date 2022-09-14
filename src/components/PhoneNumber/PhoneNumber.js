import React, { Component } from 'react';
import Strapi from "strapi-sdk-javascript/build/main";

const strapi = new Strapi("https://strapi-cms-lite.herokuapp.com");

class PhoneNumber extends Component {

render() {
  const phone = {
    phone: "Phone phone"
  };
    return (
      <div>
        <div>
            {phone.phone}
        </div>
      </div>

    )
  }
}
export default PhoneNumber