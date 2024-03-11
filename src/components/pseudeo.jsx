import React from "react";
import Navbar from "./navbar";
function pseudoHTML(){

    const anotherFunction = () =>{

    }
    return(
        <>
            <Navbar />
            <div className="pseudoclass">
                <button onClick={() => anotherFunction()}></button>
            </div>
        </>
    );
}

export default pseudoHTML;