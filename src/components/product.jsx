
export default function ProductCard (props) {
    return(<div className="card" key={"card"+props.id}>
          <img className="card-img-top" src={"../assets/img/" + props.image} alt={props.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text kursiv-text">Marke: {props.brand}</p>
                <p className="card-text">{props.price} €</p>
            </div>
            <div className="card-btns">
              <button onClick={props.showItem}>
                <img title="view product" alt="view product" className="btn-img-1" 
                src="./assets/img/view.png"/>Anzeigen
              </button>
            </div>
        </div>
      );
}