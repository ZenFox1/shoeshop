export default function SingleProduct(props){
    return(
        <>
        <span style={{paddingLeft: "45%"}}></span>
        <button onClick={props.back}><img src="./assets/img/back.png" /></button>
        <span style={{paddingLeft: "10px"}}></span>
        <button onClick={props.addItem}><img src="./assets/img/add.png" /></button>
        <div className="product-container">
            <div>
                <h4 className="single-product-title">{props.used.name}</h4>
                <img className="item-picture" src={"./assets/img/" + props.used.bild}/>
            </div>
            <div>
                <p className="card-text kursiv-text">Marke: {props.used.marke}</p>
                <p className="card-text">Marke: {props.used.beschreibung}</p>
                <p className="card-text">{props.used.preis} €</p>
                
            </div>
        </div>
        
        </>

    );
};