import logo from "../logo.png";
import siteMaps from '../sitemap.json';

export default function Navbar() {
    const notImp = () =>{
        window.alert("noch nicht Implementiert!");
    }
    
    return (
    <nav className="navbar navbar-expand-lg navbar-light">
    <img alt={logo} src={logo} />
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        {siteMaps.sites.map((nav) =>
        <li key={nav.de} className="nav-item active">
            <button onClick={() => notImp()} className="nav-link">{nav.de}</button>
        </li>)}
        </ul>
        </div>
    </nav>
    );
}