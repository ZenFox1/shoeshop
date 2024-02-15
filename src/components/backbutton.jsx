import React, { Component } from 'react';

function BackButton (props){
    return(
    <button onClick={props.onAdd} style={{border: "none", background: "none"}}>
        <img src="./assets/img/back.png"/>
    </button>
    );
};

export default BackButton;