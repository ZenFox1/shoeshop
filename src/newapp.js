import { useState, useCallback } from "react";
import productData from './products.json';
import MyButton from "./components/mybutton";

function NewApp(){
    const [items, setItems] = useState([]);
    const [view, setView] = useState({wert: "start"});
    const [activeItem, setActiveItem] = useState({active: ""}); 
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



    const idleFunction = () =>{
        //does nothing
        return true;
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
        setItems(currentItems);
    }

    const SingleItem = () =>{
        if (activeItem !== ""){
            const toShow = productData.shoes.find(shoe => shoe.name === activeItem)  
        return(
        <div>
            <h5 className="single-product-title">{toShow.name}</h5>
            <div className="pic-desc">
                <img className="item-picture" src={"./assets/img/" + toShow.bild} alt="Card image cap"/>
                <p className="card-text">{toShow.marke}</p>
                <p className="card-text">{toShow.beschreibung}</p>
            </div>
            <div className="pic-desc">
                <label for="sizes">Größe wählen</label>
                <select name="sizes">
                    {toShow.groeße.map((size) =>
                    <option key={size}>{size}</option>)}
                </select>
                <button onClick={() => addProduct(1,toShow.name,toShow.preis,toShow.bild)}>
                    <img src="./assets/img/add.png"/>
                </button>
                <p className="card-text">{toShow.preis} €</p>
            </div>
        </div>);
        }
    };
    
    

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
                sizes= {shoes.groeße}
                />
                </div>)}

                </div>
            </div>
            <Footer />
            </div>
        </div>;
    }else{
        appView = 
        <div key={"App" + amountOut} className="App">
            <div className="container">
            <div className="header" key="header">
                <span style={{width: "5vw"}}></span>
            </div>
            <div key="wrap" className="warp">
                <div className="product-container" key="product-container">
                <SingleItem />
                </div>
            </div>
            </div>
        </div>;
    }
    
    
    return(appView);
    
};

export default NewApp;