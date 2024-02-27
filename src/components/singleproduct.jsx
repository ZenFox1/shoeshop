export default function SingleProduct(props){

    function sizes(){
        var sel = document.getElementById("sizeSelect");
        var selectedSize = sel.options[sel.selectedIndex].value;

        window.localStorage.setItem('size', selectedSize);
    }


    function changeColor() {
        var gfg = document.getElementById("gfg");
        var selectColor =
            document.getElementById("selectColor");

        // From the drop-down menu, obtain 
        // the value of the chosen color.
        var selectedColor =
        selectColor.options[selectColor.selectedIndex].value;

        // Set the font color of the "gfg" 
        // element to the selected color
        gfg.style.color = selectedColor;
    }

    return(
    <div className="single-product-view">

        <span style={{paddingLeft: "45%"}}></span>
        <button onClick={props.back}><img src="./assets/img/back.png" /></button>
        <span style={{paddingLeft: "10px"}}></span>
        <button onClick={props.addItem}><img src="./assets/img/add.png" /></button>
        <h4 className="single-product-title">{props.used.name}</h4>
        <div className="product-container">
            <div>
                
                <img alt="produktbild" className="item-picture" src={"./assets/img/" + props.used.bild}/>
            </div>
            <div>
                <p className="card-text kursiv-text" style={{fontWeight: "bold", color: "grey"}}>{props.used.preis} €</p>
                <label for="sizeSelect">Größe: </label>
                <select id="sizeSelect" onChange={() => sizes()}>
                {props.used.groeße.map(item => <option value={item}>{item}</option>)}
                </select>
                
                <span style={{display: "block", marginTop: "20px"}}></span>
                <p className="card-text kursiv-text">Marke: {props.used.marke}</p>
                <p className="card-text">Beschreibung: {props.used.beschreibung}</p>
                
                
                
            </div>
            
        </div>
    </div>
    );
};