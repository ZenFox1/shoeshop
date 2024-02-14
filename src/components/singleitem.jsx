import React, { Component } from 'react';

function SingleItem (props) {

    const activeItem = props.product;
    console.log(activeItem);
    return (<div className="wrap">
    <div className="pic-desc">
        <h5 className="">{activeItem.name}</h5>
        <img className="item-picture" src={"./assets/img/" + activeItem.bild} alt="Card image cap"/>
        <p className="card-text">{activeItem.beschreibung}</p>
    </div>
    <div className="">
        <p className="card-text">{activeItem.preis} €</p>
        <button onClick={props.onAdd} style={{border: "none", background: "none"}}><img src="./assets/img/add.png"/></button>
    </div>
</div>
    );
};
 
export default SingleItem;