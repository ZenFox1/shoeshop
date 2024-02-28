function LoginForm(props){
    return(
<form  className="login">
  <h6>Anmelden</h6>
  <div className="form-group" style={{fontSize: "12px",display: "flex"}}>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
    <button onClick={props.clicked} type="button" className="btn btn-primary">Anmelden</button>
  </div>
</form>
    );
};

export default LoginForm;