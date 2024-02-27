import React, { useState, useCallback,useEffect } from 'react';
import { ReactDOM } from 'react';

//component imports
import ShoppingcartLight from './components/shoppingcartlight';
import ProductCard from './components/product';
import SingleProduct from './components/singleproduct';
import MyCheckout from './components/checkout';
import Navbar from './components/navbar';
import Footer from './components/footer';
import LoginForm from './components/loginform';

//stylesheet imports
import "./css/shoppingcart.css"

//json imports
import productData from './products.json';
import serviceData from './service.json';


function App(){

  //const's
  const [items, setItems] = useState([]);
  const [view, setView] = useState({wert: "start"});
  const [service, setService] = useState(<button className="service-bot-unused" onClick={() => ServiceBotState(true)}>Hilfe anzeigen</button>);
  const faqData = serviceData.faq;

  const notLive = () =>{
    window.alert("noch nicht Implementiert!");
  }

  //window.localStorage.clear();
  //window.localStorage.removeItem("cartItems");



//functions
  function addProduct (amount, name, price, image){
    let currentItems = items;
    let size = window.localStorage.getItem('size');
    let existingItem = currentItems.find(item => item.name === name);
    let total = price;

    if(existingItem){
      if(existingItem.size === size){
        existingItem.amount++;
        existingItem.total= ((existingItem.total*100) + (price*100))/100;
      }else{
        currentItems.push({
            amount,
            name,
            price,
            total,
            image,
            size
        })};
    }else{
        currentItems.push({
            amount,
            name,
            price,
            total,
            image,
            size
        });
    }
    window.localStorage.setItem('cartItems', JSON.stringify(items));
    setView({wert: view.wert});
  }

  function decProduct(name,price,size){
    let currentItems = items;
    let existingItems = currentItems.filter(item => item.name === name);
    let existingItem = existingItems.find(item => item.size === size);

    if(existingItem.amount == 1){

    }else{
      existingItem.amount--;
      existingItem.total= ((existingItem.total*100) - (price*100))/100;
    }
    setItems(currentItems);
    setView({wert: view.wert});
  }

  function incProduct(name,price,size){
    let currentItems = items;
    let existingItems = currentItems.filter(item => item.name === name);
    let existingItem = existingItems.find(item => item.size === size);

      existingItem.amount++;
      existingItem.total= ((existingItem.total*100) + (price*100))/100;
    setItems(currentItems);
    setView({wert: view.wert});
  }
  function delProduct(name, size){
    let currentItems = items;
    let existingItems = currentItems.filter(item => item.name === name);
    let existingItem = existingItems.find(item => item.size === size);

    setItems(currentItems.filter((current) => current !== existingItem));
    setView({wert: view.wert});
  }

  function ShoppingCart2(props){

    const sum = props.items.map((item) => item.total);
    var buyButton = "";


    var sumOut = 0;
    for(let i =0; i< sum.length; i++){
        sumOut += sum[i];
    }
    sumOut = Math.round(sumOut*100)/100;
    
    if(sumOut == 0){
      buyButton ="";
    }else{
      buyButton = <button onClick={props.clicked}><img src="./assets/img/checkout.png" />Jetzt kaufen</button>;
    }

    return(
        <>
        <span style={{paddingLeft: "45%"}}></span>
        <button><img onClick={props.back} src="./assets/img/back.png" /></button>
        <table className="sc-table">
            <thead>
                <tr>
                    <td></td>
                    <td>Name</td>
                    <td>Größe</td>
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
                    <td>{item.size}</td>
                    <td>{item.amount}</td>
                    <td>{item.price} €</td>
                    <td>{item.total} €</td>
                    <td>
                        <button onClick={() => decProduct(item.name,item.price, item.size)}>-</button>
                        <button onClick={() => incProduct(item.name,item.price, item.size)}>+</button>
                        <button onClick={() => delProduct(item.name, item.size)}>X</button>
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
        {buyButton}
        </>
    );
  };
  function Servicebot(){
    const [base, setBase] = useState("default");
    const [basename, setBasename] = useState("");
    

    
    function theSwitcher(name){
      let existingItem = faqData.find(item => item.namede === name);
      if(existingItem){
        setBase(existingItem.textde);
        setBasename(existingItem.namede);
      }
    }
    
    if (basename === ""){
      return(<>
      <div>Bitte wählen Sie Ihr Thema aus</div>
        {faqData.map(theme => <button onClick={() => theSwitcher(theme.namede)}>{theme.namede}</button>)}
      </>);

    }else if(basename == "Zahlungsarten"){
      let nextLevel = faqData.find(item => item.namede === basename);
    return(<>
      <button style={{fontSize: "14px"}} onClick={() => setBasename("")}><img style={{width: "14px"}} src="./assets/img/back.png"/>zurück</button>
      <div>Bitte wählen Sie die Zahlungsart über welche Sie Informationen benötigen.</div>
      <div className="service-bot-texts">
      {nextLevel.werte.map((lvl) =><button onClick={() => theSwitcher(lvl.name)}>{lvl.name}</button> )}
      </div>
      </>);

    }else{
      return(<>
      <button style={{fontSize: "14px"}} onClick={() => setBasename("")}><img style={{width: "14px"}} src="./assets/img/back.png"/>zurück</button>
        <div className="service-bot-texts">{base}</div>
          
        </>);
    }
  };

  function ServiceBotState(input){
    var serve = "";
    if (input === true){
      serve = <><div className="service-bot">
        <Servicebot />
        </div>
        <button className="service-bot-unused" onClick={() => ServiceBotState(false)}>Hilfe ausblenden</button>
        </>
        ;
    }else{
      serve = <button className="service-bot-unused" onClick={() => ServiceBotState(true)}>Hilfe anzeigen</button>;
    }
    console.log(window.localStorage.getItem('service'));
    setService(serve);
  }

  if(view.wert === "start"){
    return(
        <div key="App" className="App">
        <div className="container" key="container">
          <div className="header" key="header">
            <Navbar />
            <LoginForm clicked={() =>notLive()}/>
          </div>
          <div className="content" key="content">
      <div key="wrap" className="warp">
        {service}
        <ShoppingcartLight amcaption="checked" clicked={() => setView({
          wert: "sc"
        })} items={items}/>
        

        <img className="header-img" src="/assets/img/walking.jpg" />
      <div className="product-container" key="product-container">
      {
        productData.shoes.map((shoe) => 
        <ProductCard key={"shoe"+shoe.id}
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
      </div>
        <div className="footer" key="footer">
          <Footer />
        </div>
      </div>
  </div>
  
    );
  }else if (view.wert === "sc"){
    return(
    
        <div key="App" className="App">
        <div className="container" key="container">
          <div className="header" key="header">
            <Navbar />
            <LoginForm clicked={() =>notLive()}/>
          </div>
          <div className="content" key="content">
    <div>{service}<ShoppingCart2 
    back={() => setView({wert: "start"})}
    clicked={() => setView({
      wert: "checkout"
    })}
    items={items}/></div>
            </div>
        <div className="footer" key="footer">
          <Footer />
        </div>
      </div>
  </div>);
  }else if(view.wert === "checkout"){
    return (
      <div key="App" className="App">
        <div className="container" key="container">
          <div className="header" key="header">
            <Navbar />
            <LoginForm clicked={() =>notLive()}/>
          </div>
          <div className="content" key="content">
          {service}
          <ShoppingcartLight amcaption="unchecked" clicked={() => setView({
            wert: "sc" })} items={items}/>
          <MyCheckout back={() => setView({wert: "sc"})}/>
          </div>
          <div className="footer" key="footer">
            <Footer />
          </div>
        </div>
      </div>
      );
  }else{
    let usedItem = productData.shoes.find(item => item.name === view.wert);
    return(
        <div key="App" className="App">
        <div className="container" key="container">
          <div className="header" key="header">
            <Navbar />
            <LoginForm clicked={() =>notLive()}/>
          </div>
          <div className="content" key="content">
    <div key="wrap" className="warp">
      {service}
      <ShoppingcartLight amcaption="checked" clicked={() => setView({
          wert: "sc"
        })} items={items}/>
        
      <SingleProduct back={() => setView({wert: "start"})} addItem={() => addProduct(1,usedItem.name,usedItem.preis,usedItem.bild)} used={usedItem}/>
    </div>
    </div>
        <div className="footer" key="footer">
          <Footer />
        </div>
      </div>
  </div>);
  }
  
};

export default App;
