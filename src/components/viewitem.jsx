import React from 'react';

function ViewButton (props){
    return(
        <div className="show-btn">
            <button title="artikel Anzeigen" onClick={props.onAdd} 
            style={{border: "none", background: "none"}}>
                <img className="btn-img-1" src="./assets/img/view.png"/> Artikel anzeien
            </button>
        </div>
    );
};

export default ViewButton;