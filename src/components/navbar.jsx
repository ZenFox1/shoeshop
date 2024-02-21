import logo from "../logo.png";
import siteMaps from '../sitemap.json';
export default function Navbar() {
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
            <a className="nav-link">{nav.de}</a>
        </li>)}
        </ul>
        </div>

    </nav>
    );
}