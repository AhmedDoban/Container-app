import React from "react";
import "./Login.css";
function Login(props) {
  const HandelLogin = () => {
    localStorage.setItem("Login", "ture");
    props.SetLogedOn(true);
  };
  return (
    <React.Fragment>
      <div className="login">
        <div className="left">
          <div className="logo">
            <img src={require("../../img/logo.svg").default} alt="" />
          </div>
          <h1>Quote, Book & Track Your Cargo Online</h1>
          <p>
            Manage all of your freight requirements in one place. Simply log in
            to experience the benefits of digital freight forwarding and ship
            with ease.
          </p>
        </div>
        <div className="right">
          <div className="data">
            <h3>Welcome to iContainers</h3>
            <p>
              Don’t have an account? <a href="">Register Here</a>
            </p>
          </div>
          <form action="">
            <input type="email" name="" id="" placeholder="Work Email *" />
            <input type="password" name="" id="" placeholder="password *" />
            <div className="remember">
              <input type="checkbox" name="" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <button onClick={() => HandelLogin()}>Login</button>
            <a href="">Forgot Password?</a>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Login;
