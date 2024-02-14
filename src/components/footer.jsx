import React, { Component } from 'react';


class Footer extends Component {
    state = {  } 
    render() { 
        return <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="">Impressum</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">AGB</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Presse</a>
        </li>
      </ul>;
    }
}
 
export default Footer;