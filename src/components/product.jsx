import React, { Component } from 'react';

function Product (props) {

  return( 
    <div>
      <img className="card-img-top" src={"./assets/img/" + props.image} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text" maxlength="10">{props.text}</p>
        <p className="card-text">{props.price} €</p>
      </div>
      <div className="add-btn">
        <button onClick={props.onAdd} style={{border: "none", background: "none"}}>
          <img className="btn-img-1" src="./assets/img/add.png"/>in den Warenkorb
        </button>
      </div>
    </div>
  );
};
 
export default Product;