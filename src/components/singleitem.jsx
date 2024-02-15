import React from 'react';

function SingleItem (props) {
    const activeItem = props.product;
    return (
        <div>
            <h5 className="single-product-title">{activeItem.name}</h5>
            <div className="pic-desc">
                <img className="item-picture" src={"./assets/img/" + activeItem.bild} alt="Card image cap"/>
                <p className="card-text">{activeItem.beschreibung}</p>
            </div>
            <div className="pic-desc">
                <label for="sizes">Größe wählen</label>
                <select name="sizes">
                    {activeItem.groeße.map((size) =>
                    <option key={size}>{size}</option>)}
                </select>
                <button onClick={props.onAdd}>
                    <img src="./assets/img/add.png"/>
                </button>
                <p className="card-text">{activeItem.preis} €</p>
            </div>
        </div>
    );
};
 
export default SingleItem;