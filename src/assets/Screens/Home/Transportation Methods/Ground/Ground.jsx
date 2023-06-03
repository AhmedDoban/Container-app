import "./Ground.css";
import React, { useState, useEffect } from "react";
import { CountriesData } from "../../../../../Countries";

function GroundTransportationMethod() {
  /****************************************
  # Shipping Origen , Destination
 ******************************************/
  const [Shipping, SetShipping] = useState({
    Origen: "",
    Destination: "",
  });

  const [OriginIndoor, SetOriginIndoor] = useState(false);
  const [DestinationIndoor, SetDestinationIndoor] = useState(false);

  return (
    <React.Fragment>
      <div className="GroundTransportationMethod">
        {/***************** Origin  ************************/}
        <div className="card-input">
          <label htmlFor="Origin">
            <div className="left">
              <i className="fa-solid fa-earth-americas"></i> Origin *
            </div>
            <label class="switch" htmlFor="switchOrigin">
              <input
                type="checkbox"
                id="switchOrigin"
                checked={OriginIndoor}
                onChange={() => SetOriginIndoor(!OriginIndoor)}
              />
              <span class="slider"></span>
            </label>
          </label>
          <input
            type="search"
            id="Origin"
            value={Shipping.Origen}
            placeholder="Airport  , Sity or Zip Code"
            onChange={(e) =>
              SetShipping({ ...Shipping, Origen: e.target.value })
            }
            onFocus={(e) => e.target.classList.add("active")}
            onBlur={(e) => e.target.classList.remove("active")}
          />
          {/***************** Origin overlay ************************/}
          <ul className="data-overlay">
            {CountriesData.filter((data) =>
              Shipping.Origen === ""
                ? data
                : data.name.toLowerCase().includes(Shipping.Origen)
            )
              .slice(0, 5)
              .map((data) => (
                <li
                  onClick={() =>
                    SetShipping({ ...Shipping, Origen: data.name })
                  }
                >
                  {data.name}
                </li>
              ))}
          </ul>
          {/***************** End Origin overlay ************************/}
        </div>
        {/***************** Destination ************************/}
        <div className="card-input">
          <label htmlFor="Destination">
            <div className="left">
              <i className="fa-solid fa-earth-americas"></i>Destination *
            </div>
            <label class="switch" htmlFor="switchDestination">
              <input
                type="checkbox"
                id="switchDestination"
                checked={DestinationIndoor}
                onChange={() => SetDestinationIndoor(!DestinationIndoor)}
              />
              <span class="slider"></span>
            </label>
          </label>
          <input
            type="search"
            id="Destination"
            placeholder="Airport  , Sity or Zip Code"
            value={Shipping.Destination}
            onChange={(e) =>
              SetShipping({ ...Shipping, Destination: e.target.value })
            }
            onFocus={(e) => e.target.classList.add("active")}
            onBlur={(e) => e.target.classList.remove("active")}
          />
          {/***************** Destination overlay ************************/}
          <ul className="data-overlay">
            {CountriesData.filter((data) =>
              Shipping.Destination === ""
                ? data
                : data.name.toLowerCase().includes(Shipping.Destination)
            )
              .slice(0, 5)
              .map((data) => (
                <li
                  onClick={() =>
                    SetShipping({ ...Shipping, Destination: data.name })
                  }
                >
                  {data.name}
                </li>
              ))}
          </ul>

          {/***************** End Destination overlay ************************/}
        </div>
        <div className="Search-input">
          <button>Search Rate</button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default GroundTransportationMethod;