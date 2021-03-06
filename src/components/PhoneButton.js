import React, { Component } from 'react';
import phone from '../assets/images/phone-icon.png';

class PhoneButton extends React.Component {

  constructor( props ) {
    super( props );
  }

  render() {
    const displ = this.props.clicks % 2 == 0 ? 'hidden' : 'showing_phone';
    const phonenumber = this.props.phonenumber;
    return (
      <a href={"tel:" + phonenumber}>
        <div id="bellhop-phone-button" className={`sub-button ${displ}`} >
          <img id="bellhop-button-image" src={phone} />
        </div>
      </a>
    );
  }
}

export default PhoneButton;
