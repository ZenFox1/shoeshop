import React, { useState, useCallback,useEffect } from 'react';
import ShoppingcartLight from './components/shoppingcartlight';
import ProductCard from './components/product';
import SingleProduct from './components/singleproduct';
import MyCheckout from './components/checkout';
import "./css/shoppingcart.css"
//json importe
import productData from './products.json';

function App(){
  const [items, setItems] = useState([]);
  const [view, setView] = useState({wert: "start"});

  console.log(view.wert + " view");
  console.log(items);

  function addProduct (amount, name, price, image){
    let currentItems = items;
    let existingItem = currentItems.find(item => item.name === name);
    let total = price;

    if(existingItem){
        existingItem.amount++;
        existingItem.total= ((existingItem.total*100) + (price*100))/100;
    }else{
        currentItems.push({
            amount,
            name,
            price,
            total,
            image,
        });
    }
    setItems(currentItems);
    setView({wert: view.wert});
  }

  function decProduct(name,price){
    let currentItems = items;
    let existingItem = currentItems.find(item => item.name === name);

    if(existingItem.amount == 1){

    }else{
      existingItem.amount--;
      existingItem.total= ((existingItem.total*100) - (price*100))/100;
    }
    setItems(currentItems);
    setView({wert: view.wert});
  }

  function incProduct(name,price){
    let currentItems = items;
    let existingItem = currentItems.find(item => item.name === name);

      existingItem.amount++;
      existingItem.total= ((existingItem.total*100) + (price*100))/100;
    setItems(currentItems);
    setView({wert: view.wert});
  }
  function delProduct(name){
    let currentItems = items;
    setItems(currentItems.filter((current) => current.name !== name));
    setView({wert: view.wert});
  }

  function ShoppingCart2(props){

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
                        <button onClick={() => decProduct(item.name,item.price)}>-</button>
                        <button onClick={() => incProduct(item.name,item.price)}>+</button>
                        <button onClick={() => delProduct(item.name)}>X</button>
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

  if(view.wert === "start"){
    return(
      <div key="wrap" className="warp">
        <ShoppingcartLight clicked={() => setView({
          wert: "sc"
        })} items={items}/>

        <img className="header-img" src="/assets/img/walking.jpg" />
      <div className="product-container" key="product-container">
      {
        productData.shoes.map((shoe) => 
        <ProductCard key={"shoe"+shoe.id}
        addItem ={() => addProduct(1,shoe.name,shoe.preis,shoe.bild)}
        showItem={() => setView({
          wert: shoe.name
        })}
        title={shoe.name} 
        brand ={shoe.marke}
        price ={shoe.preis}
        image={shoe.bild}
        />
        )
      }
      </div></div>
  
    );
  }else if (view.wert === "sc"){
    return(<div><ShoppingCart2 
    back={() => setView({wert: "start"})}
    clicked={() => setView({
      wert: "checkout"
    })}
    items={items}/></div>);
  }else if(view.wert === "checkout"){
    return (<MyCheckout back={() => setView({wert: "sc"})}/>);
  }else{
    let usedItem = productData.shoes.find(item => item.name === view.wert);
    console.log(usedItem + "test");
    return(
    <div key="wrap" className="warp">
      <ShoppingcartLight clicked={() => setView({
          wert: "sc"
        })} items={items}/>
        
      <SingleProduct back={() => setView({wert: "start"})} addItem={() => addProduct(1,usedItem.name,usedItem.preis,usedItem.bild)} used={usedItem}/>
    
    </div>);
  }
  
};

export default App;