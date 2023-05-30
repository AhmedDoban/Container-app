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
        <h1>Login page</h1>
        <button onClick={() => HandelLogin()}> a;lkda</button>
      </div>
    </React.Fragment>
  );
}
export default Login;
