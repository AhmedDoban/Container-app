import React, { useEffect, useRef, useState } from "react";
import Login from "./assets/Screens/Login/Login";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./assets/Screens/Home/Home";
import Sea from "./assets/Screens/Home/Ways/Sea/Sea";
import Air from "./assets/Screens/Home/Ways/Air/Air";
import Ground from "./assets/Screens/Home/Ways/Ground/Ground";

function App() {
  const Nav = useRef();
  const Back_to_top = useRef();
  const [LogedIn, SetLogedOn] = useState(false);
  const GetUser = (e) => {
    const userString = localStorage.getItem("Login");
    return userString;
  };
  window.onscroll = (e) => {
    if (window.scrollY > 100) {
      Nav.current.style.cssText = "top:0;background-color: #00000058;";
    } else {
      Nav.current.style.cssText = "top:auto;";
    }
    if (window.scrollY >= 150) {
      Back_to_top.current.style.cssText = "display : flex !important";
    } else {
      Back_to_top.current.style.cssText = "display : none";
    }
  };

  Back_to_top.current.addEventListener("click", (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  useEffect(() => {
    SetLogedOn(GetUser());
  }, []);

  if (!LogedIn) {
    return <Login SetLogedOn={SetLogedOn} />;
  } else {
    return (
      <React.Fragment>
        <div className="Auth">
          <i class="fas fa-arrow-up back-to-top" ref={Back_to_top} />
          <Routes>
            <Route path="" element={<Outlet />}>
              <Route path="" element={<Home Nav={Nav} />} />
              <Route path="service/Sea Freight" element={<Sea Nav={Nav} />} />
              <Route path="service/Air Freight" element={<Air Nav={Nav} />} />
              <Route
                path="service/Ground Shipping"
                element={<Ground Nav={Nav} />}
              />
            </Route>
          </Routes>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
