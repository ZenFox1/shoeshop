import { useState } from "react";

export default function MyButton(props){
    const [btnVal, setBtnVal] = useState("");
    if(props.type === "img"){
        setBtnVal(<img alt={props.text} className="btn-img-1" src={props.source}/>);
    }else{
        setBtnVal("");
    }

    return(
        <button onClick={props.clicked}>{btnVal} + {props.text}</button>
    );
};