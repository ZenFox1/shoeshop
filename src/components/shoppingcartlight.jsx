import "../css/shoppingcart.css"
function ShoppingcartLight(props) {
    const sum = props.items.map((item) => item.total);
    const amounts = props.items.map((item) => item.amount);


    var sumOut = 0;
    var amountOut = 0;

    for(let i =0; i< sum.length; i++){
        sumOut += sum[i];
        amountOut += amounts[i];

    }
    
    sumOut = Math.round(sumOut * 100)/100;

    return(
        <div className="sc-light">
        <table className="sc-table">
        <tbody>
            <tr className="sc-nodot">
                <td className="scLight-font">Menge im Warenkorb: {amountOut}</td>
                <td className="scLight-font">Betrag: {sumOut} €</td>
                <td className="scLight-font"><button onClick={props.clicked}><img alt="to cart" className="btn-img-1" src="./assets/img/cart.png"/>Warenkorb anzeigen</button></td>
            </tr>
        </tbody>
        </table>
        </div>
    );

};
export default ShoppingcartLight;