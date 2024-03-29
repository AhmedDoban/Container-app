import React from "react";
import Landing from "./Landing/Landing";
import TransportationMethods from "./Transportation Methods/TransportationMethods";
import Contact from "./Contact/Contact";
import Service from "./Service/Service";
import TrueInformation from "./TrueInformation/TrueInformation";
import Map from "./Map/Map";
import Footer from "../Footer/Footer";
function Home(props) {
  return (
    <React.Fragment>
      <Landing Nav={props.Nav} />
      <TransportationMethods />
      <Contact />
      <Service Nav={props.Nav} />
      <TrueInformation />
      <Map />
      <Footer />
    </React.Fragment>
  );
}
export default Home;
