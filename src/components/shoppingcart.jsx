import React, { useState } from 'react';

function ShoppingCart (props){
    const sum = props.items.map((items) => items.price)
    const amounts = props.items.map((items) => items.amount)

    let sumOut = 0;
    let amountOut = 0;
    let valout = "";
    
    for(let i =0; i< sum.length; i++){
        sumOut += sum[i];
    }

    for(let i =0; i< amounts.length; i++){
        amountOut += amounts[i];
    }

    if(props.type == "light"){
        valout = <div className="scLight">
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
        </div>;
    }else{
        valout = <div className="shoppingcart">
        <div className="add-btn">
            <button >
                <img src="./assets/img/checkout.png"/>jetzt kaufen
            </button>
        </div>
        <h4>Warenkorb</h4>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th style={{paddingRight: '10px'}}>Name</th>
                    <th style={{paddingRight: '10px'}}>Preis</th>
                    <th style={{paddingRight: '10px'}}>Menge</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            { props.items.map(item => <tr key={item.name}>
            <td><img className="sc-img-min" src={"./assets/img/" + item.image}/></td>
            <td style={{paddingRight: '10px'}}>{item.name}</td>
            <td style={{paddingRight: '10px'}}>{item.price} €</td>
            <td style={{paddingRight: '10px'}}>{item.amount}</td>
            <td><button style={{width: '27px'}}>-</button>
            <button style={{width: '27px'}}>+</button></td>
            </tr>)
            }
            
            </tbody>
            <tfoot>
            <tr><td></td><td></td><td></td><td>Summe:</td><td>{sumOut} €</td></tr>
            </tfoot>
        </table>
    </div>;
    }
    return (valout);
};
 
export default ShoppingCart;