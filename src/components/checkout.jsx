function MyCheckout(props){
    //todo
    return(
    <><span style={{paddingLeft: "45%"}}></span>
    <button><img onClick={props.back} src="./assets/img/back.png" /></button>
    <form>
    <div className="form-group">
        <label for="inputAddress">Adresse</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
    </div>
    <div className="form-group">
        <label for="inputAddress2">Adresse 2</label>
        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
    </div>
    <div className="form-row">
        <div className="form-group col-md-6">
        <label for="inputCity">Stadt</label>
        <input type="text" className="form-control" id="inputCity"/>
        <div className="form-group col-md-2">
        <label for="inputZip">Postleitzahl</label>
        <input type="text" className="form-control" id="inputZip"/>
        </div>
        </div>
        
    </div>
    <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Versanddienstleister</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
          <label className="form-check-label" for="gridRadios1">
            DHL
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
          <label className="form-check-label" for="gridRadios2">
            DPD
          </label>
        </div>
        <div className="form-check disabled">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
          <label className="form-check-label" for="gridRadios3">
            GLS
          </label>
        </div>
      </div>
    </div>
  </fieldset>
    <button type="submit" className="btn btn-primary">jetzt Kaufen</button>
    </form>
    </>
    );
};

export default MyCheckout;