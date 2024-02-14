import './App.css';
import Navbar from './components/navbar';
import Product from './components/product';
import React from 'react';
import ShoppingCart from './components/shoppingcart';
import Footer from './components/footer';
import productData from './products.json';
import ViewButton from './components/viewitem';
import SingleItem from './components/singleitem';
import BackButton from './components/backbutton';
import ShoppingCartLight from './components/scoverview';


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

    if(this.state.views.wert == "start"){
      const data = this.state.items;
      return <div className="App">
        <div className="container">
          <div className="header">
            <Navbar items={data} onAdd={() => this.changeView("start")}/>
          </div>
            <div className="product-container">

              {productData.shoes.map(shoe => <div className="card"><Product
              key={shoe.id}
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
              </div>)}

            </div>
            
            </div>
          <Footer />
        </div>;
    }else{
      const toView = this.state.views.wert;
      const data = this.state.items;
      const used = productData.shoes.find(shoe => shoe.name == toView);

      console.log(toView + " -->toview");
      console.log(used.name + " -->used");

      return <div className="App">
        <div className="container">
          <div className="header">
                <Navbar items={data} onAdd={() => this.changeView("start")}/>
          </div>
          <div><BackButton onAdd={() => this.changeView("start")}/></div>
          <div className="single-product">
            <SingleItem 
            product={used}
            onAdd={() => this.addItem(1, used.name, used.preis)}
            />
          </div>
        </div> 
          <Footer />
        </div>;
    }
  }
}

export default App;