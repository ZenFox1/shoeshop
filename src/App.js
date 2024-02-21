import React, { useState, useCallback,useEffect } from 'react';
import ShoppingcartLight from './components/shoppingcartlight';
import ProductCard from './components/product';
import ShoppingCart from './components/shoppingcart';
import SingleProduct from './components/singleproduct';
import MyCheckout from './components/checkout';
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

    existingItem.amount--;
    existingItem.total= ((existingItem.total*100) - (price*100))/100;
  
    setItems(currentItems);
  }

  function incProduct(){
    
  }
  function delProduct(){
    
  }
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
    return(<div><ShoppingCart 
    back={() => setView({wert: "start"})}
    decrease={() => decProduct()}
    increase={() => incProduct()}
    delete={() => delProduct()}
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