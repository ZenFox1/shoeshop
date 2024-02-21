import "../css/shoppingcart.css"
function ShoppingCart(props){

    const sum = props.items.map((item) => item.total);
    var sumOut = 0;
    for(let i =0; i< sum.length; i++){
        sumOut += sum[i];
    }
    sumOut = Math.round(sumOut*100)/100;
    return(
        <>
        <span style={{paddingLeft: "45%"}}></span>
        <button><img onClick={props.back} src="./assets/img/back.png" /></button>
        <table className="sc-table">
            <thead>
                <tr>
                    <td></td>
                    <td>Name</td>
                    <td>Menge</td>
                    <td>Preis / Stück</td>
                    <td>Gesamtpreis</td>
                </tr>
            </thead>
            <tbody>
                {props.items.map((item) =>
                <tr className="item-table-row">
                    <td><img style={{width: "120px"}} src={"/assets/img/"+item.image}/></td>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td>{item.price} €</td>
                    <td>{item.total} €</td>
                    <td>
                        <button onClick={props.decrease}>-</button>
                        <button onClick={props.increase}>+</button>
                        <button onClick={props.delete}>X</button>
                    </td>
                </tr> )}
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="sc-bold">Summe:</td>
                    <td className="sc-bold">{sumOut} €</td>
                </tr>
            </tfoot>
        </table>
        <span style={{paddingLeft: "80%"}}></span>
        <button onClick={props.clicked}><img src="./assets/img/checkout.png" />Jetzt kaufen</button>
        </>
    );
};

export default ShoppingCart;