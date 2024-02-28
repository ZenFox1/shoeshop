import { useState } from "react";
import logo from "../logo.png";
import siteMaps from '../sitemap.json';
export default function Navbar() {

    const [toggle, setToggle] = useState(true)


    return (
    <nav className="navbar navbar-expand-lg navbar-light">
    <img alt={logo} src={logo} />
    <button className="navbar-toggler" type="button" onClick={() => setToggle(!toggle)}>
        <span className="navbar-toggler-icon"></span>
    </button>
    
    {toggle && (<div className="mobile-nav" id="navbarNav">
        <ul className="navbar-nav">
        {siteMaps.sites.map((nav) =>
        <li key={nav.de} className="nav-item active">
            <a className="nav-link">{nav.de}</a>
        </li>)}
        </ul>
    </div>
    )}
    </nav>
    );
}