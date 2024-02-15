import React, { Component, useState } from 'react';
import logo from "../logo.png";


function Navbar (props) {
  const sum = props.items.map((items) => items.price)
  const amounts = props.items.map((items) => items.amount)
  let sumOut = 0;
  let amountOut = 0;

  for(let i =0; i< sum.length; i++){
      sumOut += sum[i];
  }

  for(let i =0; i< amounts.length; i++){
      amountOut += amounts[i];
  }

  return(
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button onClick={props.onAdd} style={{border: "none", background: "none"}}>
        <img src={logo} />
      </button>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {props.menu.map((nav) =><li className="nav-item active">
            <button className="nav-link">{nav.de}</button>
          </li>)}
        </ul>
      </div>
      <div className="scLight">
        <table>
          <tr><td><h5>Warenkorb</h5></td><td></td></tr>
          <tr><td style={{paddingLeft: "50px",paddingRight: "50px"}}>Artikel im Warenkorb: {amountOut}</td><td style={{paddingLeft: "50px",paddingRight: "50px"}}>Betrag: {sumOut}</td></tr>
        </table>
      </div>
    </nav> 
  </div>
  );
};
 
export default Navbar;