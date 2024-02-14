import React from 'react';

function ViewButton (props){
    return(<button onClick={props.onAdd} style={{border: "none", background: "none"}}><img src="./assets/img/view.png"/></button>);
};

export default ViewButton;