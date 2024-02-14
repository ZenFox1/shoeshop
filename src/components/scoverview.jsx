import React, { Component } from 'react';

function ShoppingCartLight(props){
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
        <div className="scLight">
        
        <table>
            <tr><td><h5>Warenkorb</h5></td><td></td></tr>
            <tr><td style={{paddingLeft: "50px",paddingRight: "50px"}}>Artikel im Warenkorb: {amountOut}</td><td style={{paddingLeft: "50px",paddingRight: "50px"}}>Betrag: {sumOut}</td></tr>
            </table>
        </div>
    );
};

export default ShoppingCartLight;