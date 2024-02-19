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
        <tbody>
            <tr>
                <td>Artikel im Warenkorb: {amountOut}</td>
                <td>Betrag: {sumOut}</td>
                <td>
                    <button onClick={props.onAdd} className="cart-btn" title="zum Warenkorb">
                        <img src="./assets/img/cart.png" />zum Warenkorb
                    </button>
                </td>
            </tr>
        </tbody>
        </table>
        </div>
    );
};

export default ShoppingCartLight;