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

  addItem = (amount, name, price) => {
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
      <div>
        <div className="product-container">
          {
            productData.shoes.map(
              shoe => 
              <div className="card">
              <Product key={shoe.id}
              onAdd={() => this.addItem(1, shoe.name, shoe.preis)}
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
    }else{

      appView =
      <div>
        <div><BackButton onAdd={() => this.changeView("start")}/></div>
        <div className="single-product">
          <SingleItem 
          product={used}
          onAdd={() => this.addItem(1, used.name, used.preis)}
          />
        </div>
      </div>;
    }
    
    
    
    //erzeugen der vollständigen Seite
    appOutput =
    <div className="App">
      <div className="container">
        <div className="header">
          <Navbar menu={siteMaps.sites} items={data} onAdd={() => this.changeView("start")}/>
        </div>
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