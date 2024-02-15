import React from 'react';


function Footer (props) {
      return(<ul className="nav justify-content-end">
        
        {props.menu.map((foot) => <li className="nav-item">
           <button className="nav-link">{foot.de}</button></li>)}
      </ul>
    );
};
 
export default Footer;