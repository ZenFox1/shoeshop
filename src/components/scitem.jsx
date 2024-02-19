import React, { Component } from 'react';

function ScItem (props){
    const data = props.item;
    return(
        <div className="shoppingcart-item">
            <img className="sc-img-min" src={"./assets/img/" + data.image}/>
            <p style={{width: "400px", marginTop: "10px"}}>{data.name}</p>
            <p style={{width: "100px" , marginTop: "10px"}}>{data.price} €</p>
            <p style={{width: "50px",  marginTop: "10px"}}>{data.amount}</p>
        </div>
    );
};

export default ScItem;