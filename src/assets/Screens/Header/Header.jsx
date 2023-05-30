import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <React.Fragment>
      <div className="Header">
        <div className="container">
          {/************************ info ****************************** */}
          <div className="info">
            <div className="left">
              <div className="data">
                <i className="fa-solid fa-envelope"></i>
                <p>Newsletter</p>
              </div>
              <div className="data">
                <i className="fa-solid fa-user"></i>
                <p>Carrer</p>
              </div>
            </div>
            <div className="right">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <div className="data">
                <i class="fa-solid fa-user-plus"></i>
                Register
              </div>
              <div className="data MyAccount">
                <i className="fa-solid fa-user"></i>
                My Account
              </div>
            </div>
          </div>
        </div>
        {/***************************** mainHeader *****************************************/}
        <div className="navigators" ref={props.Nav}>
          <div className="container">
            <div className="logo">
              <img src={require("../../img/logo.png")} alt="" />
            </div>
            <ul className="menu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="">About us</NavLink>
              </li>
              <li>
                <NavLink to="">Service</NavLink>
                <div className="other-menu">
                  <NavLink to="/service/Sea Freight">Sea Freight</NavLink>
                  <NavLink to="/service/Air Freight">Air Freight</NavLink>
                  <NavLink to="/service/Ground Shipping">
                    Ground Shipping
                  </NavLink>
                </div>
              </li>
              <li>
                <NavLink>Calculators</NavLink>
              </li>
              <li>
                <NavLink>News</NavLink>
              </li>
              <li>
                <NavLink>Contact us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Header;
