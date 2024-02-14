import React, { useState } from 'react';

function ShoppingCart (props){
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

    return (<div className="shoppingcart">
                <h4>Warenkorb</h4>
                <table style={{textAlign: 'left'}}>
                    <thead>
                        <tr>
                            <th style={{paddingRight: '10px'}}>Menge</th>
                            <th style={{paddingRight: '10px'}}>Name</th>
                            <th style={{paddingRight: '10px'}}>Preis</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    { props.items.map(item => <tr key={item.name}>
                    <td style={{paddingRight: '10px'}}>
                    {item.amount} 
                    </td>
                    <td style={{paddingRight: '10px'}}>{item.name}</td>
                    <td style={{paddingRight: '10px'}}>{item.price}€</td>
                    <td><button style={{width: '27px'}}>-</button>
                    <button style={{width: '27px'}}>+</button></td>
                    </tr>)
                    }
                    
                    </tbody>
                    <tfoot>
                    <tr><td>Summe:</td><td>{sumOut}</td><td></td></tr>
                    </tfoot>
                </table>
                <button style={{border: "none", background: "none"}}><img src="./assets/img/cart.png"/></button>
                <button style={{border: "none", background: "none"}}><img src="./assets/img/checkout.png"/></button>
            </div>
    );
};
 
export default ShoppingCart;