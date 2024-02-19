import React, {useState} from 'react';

function ASBtn (props){
    const [items, setItems] = useState(props);
    
    return(
            <button className="change-btn" onClick={props.onAdd}>{items.name}</button>
    );
};

export default ASBtn;