import { useState } from "react";
import logo from "./logo.png";
import productData from './products.json';
import siteMaps from './sitemap.json';
import './App.css';

function NewApp(){
    const [items, setItems] = useState([]);
    const [view, setView] = useState({wert: "start"});
    const sum = items.map((item) => item.price);
    const amounts = items.map((item) => item.amount);
    var sumOut = 0;
    var amountOut = 0;

    var appView = "";;

    for(let i =0; i< sum.length; i++){
        sumOut += sum[i];
    }

    for(let i =0; i< amounts.length; i++){
        amountOut += amounts[i];
    }

    const Navbar = () =>{
  
        return <nav className="navbar navbar-expand-lg navbar-light">
        <button style={{border: "none", background: "none"}}>
            <img alt={logo} src={logo} />
        </button>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            {siteMaps.sites.map((nav) =>
            <li key={nav.de} className="nav-item active">
                <button className="nav-link">{nav.de}</button>
            </li>)}
            </ul>
            </div>
        </nav>;
    };

    const Footer = () =>{
        return(<ul className="nav justify-content-end">
        
        {siteMaps.foot.map((foot) => <li className="nav-item">
           <button key={foot.de} className="nav-link">{foot.de}</button></li>)}
      </ul>
    );
    }

    const ShoppingcartLight = () =>{
        return(
            <div className="scLight">
            <table>
            <tbody>
                <tr>
                    <td>Artikel im Warenkorb: {amountOut}</td>
                    <td>Betrag: {sumOut}</td>
                    <td>
                    <MyButton onAdd={() => idleFunction()} source="./assets/img/cart.png" text="zum Warenkorb" type="img"/>
                    </td>
                </tr>
            </tbody>
            </table>
            </div>
        );

    }

    const Shoppingcart = () =>{
        return(
        <div className="shoppingcart">

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
            {items.map(item => <tr key={item.name}>
            <td><img alt={item.name} className="sc-img-min" src={"./assets/img/" + item.image}/></td>
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
    </div>
        );
    }
    const idleFunction = () =>{
        //does nothing
        return true;
    }
    const ProductCard = (props) =>{
        return( 
            <div className="card" key="card">
            <div>
              <img className="card-img-top" src={"../assets/img/" + props.image} alt={props.title}/>
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.brand}</p>
                <p className="card-text">{props.text}</p>
                <p className="card-text">{props.price} €</p>
              </div></div>
              <MyButton onAdd={() => addProduct(1,props.name,props.price,props.image)} source="./assets/img/add.png" text="zum Warenkorb" type="img"/>
              <MyButton onAdd={() => idleFunction()} source="./assets/img/view.png" text="Artikel anzeigen" type="img"/>
            </div>
          );
    }

    const MyButton = (props) =>{
        let snippet ="";

        if(props.type === "img"){
            snippet = <div><img alt={props.text} className="btn-img-1" src={props.source}/>{props.text}</div>;
        }else{
            snippet = <div>props.text</div>;
        }
        
        return (
            <div className="btn">
                <button onClick={props.onAdd}>
                    {snippet}
                </button>
            </div>
        );
    }

    function addProduct (amount, name, price, image){
        let currentItems = items;
        let existingItem = currentItems.find(item => item.name === name);


        if(existingItem){
            existingItem.amount++;
            existingItem.price= ((existingItem.price*100) + (price*100))/100;
        }else{
            currentItems.push({
                amount,
                name,
                price,
                image,
            });
        }
  
        console.log(currentItems);
        setItems(currentItems);
        setView({
            wert: "start"
        })
    }

    
    

    if(view.wert === "start"){
        appView = 
        <div key={"App" + amountOut} className="App">
            <div className="container">
            <div className="header" key="header">
                <Navbar />
                <span style={{width: "5vw"}}></span>
                <ShoppingcartLight changer={amountOut}/>
            </div>
            <div key="wrap" className="warp">
                <div className="product-container" key="product-container">
                {productData.shoes.map((shoes) => 
                <div><ProductCard key={shoes.id} 
                name={shoes.name}
                image={shoes.bild}
                text ={shoes.beschreibung}
                brand ={shoes.marke}
                price ={shoes.preis}
                />
                </div>)}

                </div>
            </div>
            <Footer />
            </div>
        </div>;
    }else{
        
    }
    
    
    return(appView);
    
};

export default NewApp;