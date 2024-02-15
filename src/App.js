//import react modules
import React, { Component, useState } from 'react';


//css import
import './App.css';

//import components
import Navbar from './components/navbar';
import Product from './components/product';
import Footer from './components/footer';
import ViewButton from './components/viewitem';
import SingleItem from './components/singleitem';
import BackButton from './components/backbutton';
import ShoppingCartLight from './components/scoverview';
import ShoppingCart from './components/shoppingcart';
import MyCarousel from './components/mycarousel';

//import JSON Data
import productData from './products.json';
import siteMaps from './sitemap.json';

class App extends React.Component {
  state = { 
    items:[],
    shoes:[],
    views:{
      wert: "start"
    }
   } 

  addItem = (amount, name, price, image) => {
    let currentItems = this.state.items;
    let existingItem = currentItems.find(item => item.name == name);

    if(existingItem){
      existingItem.amount++;
      existingItem.price= existingItem.price + price;
    } else {
      currentItems.push({
        amount,
        name,
        price,
        image,
      });
      
    }
    
    this.setState({items: currentItems});
  }

  changeView = (viewVal) => {
    this.setState(() =>({
      views:{
        wert: viewVal
      }
    }));
    
  }
  
  render() {
    const toView = this.state.views.wert;
    const data = this.state.items;
    const used = productData.shoes.find(shoe => shoe.name == toView);
    var appOutput ="";
    var appView = "";

    if(this.state.views.wert == "start"){
      appView =  
      <div key="wrap" className="warp">
        <div className="product-container" key="product-container">
          {
            productData.shoes.map(
              shoe => 
              <div className="card">
              <Product key={shoe.id}
              onAdd={() => this.addItem(1, shoe.name, shoe.preis, shoe.bild)}
              price={shoe.preis}
              title={shoe.name}
              text={shoe.beschreibung} 
              image={shoe.bild}
              />
              <ViewButton 
              key={shoe.bild}
              title={shoe.name}
              onAdd={() => this.changeView(shoe.name)}
              />
              </div>
            )
          }

        </div>
      </div>;
    }else if(this.state.views.wert == "cart"){
      appView =<div><ShoppingCart database={productData} items={data} /></div>;
    }else{

      appView =
      <div>
        <div><BackButton onAdd={() => this.changeView("start")}/></div>
        <div className="single-product">
          <SingleItem 
          product={used}
          onAdd={() => this.addItem(1, used.name, used.preis, used.bild)}
          />
        </div>
      </div>;
    }
    
    
    
    //erzeugen der vollständigen Seite
    appOutput =
    <div className="App" key="App">
      <div className="container" key="container">
        <div className="header" key="header">
          <Navbar menu={siteMaps.sites} items={data} onAdd={() => this.changeView("start")}/>
          <span style={{width: "5vw"}}></span>
          <ShoppingCartLight onAdd={() => this.changeView("cart")} items={data} />
        </div>
        <MyCarousel />
        {appView}
        
        <Footer menu={siteMaps.foot}/>
      {
      //endOfContainer
      }
      </div >
    {
      //endOfApp
    }
    </div>;
    
    return appOutput;
  }
}

export default App;