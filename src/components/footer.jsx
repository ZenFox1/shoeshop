import siteMaps from '../sitemap.json';

export default function Footer() {
    return(
    <ul key="ft"className="nav justify-content-end">
    {siteMaps.foot.map((foot) => <li key={foot.name} className="nav-item">
       <a key={foot.de} className="nav-link">{foot.de}</a></li>)}
    </ul>
    );
}