import siteMaps from '../sitemap.json';

export default function Footer() {
    const notImp = () =>{
        window.alert("noch nicht Implementiert!");
    }
    return(
    <ul key="ft"className="nav justify-content-end">
    {siteMaps.foot.map((foot) => <li key={foot.name} className="nav-item">
       <button onClick={() => notImp()} key={foot.de} className="nav-link">{foot.de}</button></li>)}
    </ul>
    );
}