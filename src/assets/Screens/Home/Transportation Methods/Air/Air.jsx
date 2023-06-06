import React, { useState, useEffect } from "react";
import "./Air.css";
import "react-dropdown/style.css";
import ReactDropdown from "react-dropdown";
import CountrieFlag from "../Countrie Flag/CountrieFlag";
import { AirportsData } from "./../../../../../AirportsData";

function AirTransportationMethod() {
  /****************************************
  # Shipping Origen , Destination
 ******************************************/
  const [Shipping, SetShipping] = useState({
    Origen: "",
    Destination: "",
  });

  const [OriginIndoor, SetOriginIndoor] = useState(false);
  const [DestinationIndoor, SetDestinationIndoor] = useState(false);

  /****************************************
  # Shipping Shosen Menu
 ******************************************/
  const [FCl_or_LCL_INPUT, SetFCl_or_LCL_INPUT] = useState("");

  /****************************************
  # Shipping LCL
 ******************************************/
  const [CargoLCL, SetCargoLCL] = useState("");
  const WEIGHT_SIZE_OPtions = ["KG"];
  const height_Size_OPtions = ["CM"];
  const Length_SIZE_OPtions = ["CM"];
  const Width_Size_OPtions = ["CM"];
  const [LCLData, SetLCLData] = useState({
    WEIGHT: 1,
    WEIGHT_SIZE: WEIGHT_SIZE_OPtions[0],
    height: 1,
    height_Size: height_Size_OPtions[0],
    Length: 1,
    Length_SIZE: Length_SIZE_OPtions[0],
    Width: 1,
    Width_Size: Width_Size_OPtions[0],
  });

  useEffect(() => {
    const CargoLCLData =
      LCLData.WEIGHT +
      "" +
      LCLData.WEIGHT_SIZE +
      " , " +
      LCLData.height +
      "" +
      LCLData.height_Size +
      " , " +
      LCLData.Length +
      "" +
      LCLData.Length_SIZE +
      " , " +
      LCLData.Width +
      "" +
      LCLData.Width_Size;
    SetCargoLCL(CargoLCLData);
  }, [LCLData]);

  return (
    <React.Fragment>
      <div className="AirTransportationMethod">
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
                onChange={() => {
                  SetOriginIndoor(!OriginIndoor);
                  SetShipping({ ...Shipping, Origen: "" });
                }}
              />
              <span class="slider"></span>
            </label>
          </label>
          <input
            type="search"
            id="Origin"
            value={Shipping.Origen}
            placeholder={
              OriginIndoor
                ? "Enter Your Location"
                : "Airport  , Sity or Zip Code"
            }
            onChange={(e) =>
              SetShipping({ ...Shipping, Origen: e.target.value })
            }
            onFocus={(e) => e.target.classList.add("active")}
            onBlur={(e) => e.target.classList.remove("active")}
          />
          {OriginIndoor ? null : (
            <React.Fragment>
              {/***************** Origin overlay ************************/}
              <ul className="data-overlay">
                {AirportsData.filter((data) =>
                  Shipping.Origen === ""
                    ? data
                    : data.name
                        .toLowerCase()
                        .includes(Shipping.Origen.toLowerCase())
                    ? data.name
                        .toLowerCase()
                        .includes(Shipping.Origen.toLowerCase())
                    : data.code
                        ?.toLowerCase()
                        .includes(Shipping.Origen.toLowerCase())
                    ? data.code
                        ?.toLowerCase()
                        .includes(Shipping.Origen.toLowerCase())
                    : data.city
                        .toLowerCase()
                        .includes(Shipping.Origen.toLowerCase())
                )
                  .slice(0, 5)
                  .map((data, index) => (
                    <li
                      onClick={() =>
                        SetShipping({ ...Shipping, Origen: data.name })
                      }
                      key={index}
                    >
                      <div className="left">
                        <i className="fa-solid fa-plane-departure"></i>
                        <span>
                          <p>{data.name}</p>
                          <p>{data.country}</p>
                        </span>
                      </div>
                      <div className="right">
                        <CountrieFlag name={data.country} />
                      </div>
                    </li>
                  ))}
              </ul>
              {/***************** End Origin overlay ************************/}
            </React.Fragment>
          )}
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
                onChange={() => {
                  SetDestinationIndoor(!DestinationIndoor);
                  SetShipping({ ...Shipping, Destination: "" });
                }}
              />
              <span class="slider"></span>
            </label>
          </label>
          <input
            type="search"
            id="Destination"
            placeholder={
              DestinationIndoor
                ? "Enter Your Location"
                : "Airport  , Sity or Zip Code"
            }
            value={Shipping.Destination}
            onChange={(e) =>
              SetShipping({ ...Shipping, Destination: e.target.value })
            }
            onFocus={(e) => e.target.classList.add("active")}
            onBlur={(e) => e.target.classList.remove("active")}
          />
          {DestinationIndoor ? null : (
            <React.Fragment>
              {/***************** Destination overlay ************************/}
              <ul className="data-overlay">
                {AirportsData.filter((data) =>
                  Shipping.Destination === ""
                    ? data
                    : data.name
                        .toLowerCase()
                        .includes(Shipping.Destination.toLowerCase())
                    ? data.name
                        .toLowerCase()
                        .includes(Shipping.Destination.toLowerCase())
                    : data.code
                        ?.toLowerCase()
                        .includes(Shipping.Destination.toLowerCase())
                    ? data.code
                        ?.toLowerCase()
                        .includes(Shipping.Destination.toLowerCase())
                    : data.city
                        .toLowerCase()
                        .includes(Shipping.Destination.toLowerCase())
                )
                  .slice(0, 5)
                  .map((data, index) => (
                    <li
                      onClick={() =>
                        SetShipping({ ...Shipping, Destination: data.name })
                      }
                      key={index}
                    >
                      <div className="left">
                        <i className="fa-solid fa-plane-departure"></i>
                        <span>
                          <p>{data.name}</p>
                          <p>{data.country}</p>
                        </span>
                      </div>
                      <div className="right">
                        <CountrieFlag name={data.country} />
                      </div>
                    </li>
                  ))}
              </ul>
              {/***************** End Destination overlay ************************/}
            </React.Fragment>
          )}
        </div>
        <div className="card-input">
          <label htmlFor="Destination">
            <div className="left">
              <i className="fa-solid fa-box"></i>Cargo *
            </div>
          </label>
          <input
            type="text"
            placeholder="Cargo Details"
            className={FCl_or_LCL_INPUT}
            value={CargoLCL}
          />

          {/***************** Cargo overlay ************************/}
          <div className="data-overlay">
            <div className="menu">
              <span className={"active"}>
                <i className="fa-solid fa-boxes-stacked"></i>
                <div className="info">
                  <span>package dimension</span>
                </div>
              </span>
            </div>
            <div className="box-data">
              <div className="lcl-box">
                <div className="input-box-lcl">
                  <label htmlFor="TotalWeigth">Total Weigth*</label>
                  <div className="inputs-box">
                    <input
                      type="number"
                      placeholder="Weigth"
                      id="TotalWeigth"
                      min={1}
                      value={LCLData.WEIGHT}
                      onChange={(e) =>
                        SetLCLData({ ...LCLData, WEIGHT: e.target.value })
                      }
                    />
                    <ReactDropdown
                      options={WEIGHT_SIZE_OPtions}
                      placeholder="Weight"
                      onChange={(e) =>
                        SetLCLData({ ...LCLData, WEIGHT_SIZE: e.value })
                      }
                      value={WEIGHT_SIZE_OPtions[0]}
                    />
                  </div>
                </div>
                <div className="input-box-lcl">
                  <label htmlFor="TotalHeight">Total Height*</label>
                  <div className="inputs-box">
                    <input
                      type="number"
                      placeholder="Height"
                      id="TotalHeight"
                      min={1}
                      value={LCLData.height}
                      onChange={(e) =>
                        SetLCLData({ ...LCLData, height: e.target.value })
                      }
                    />
                    <ReactDropdown
                      options={height_Size_OPtions}
                      placeholder="Volume"
                      onChange={(e) =>
                        SetLCLData({ ...LCLData, height_Size: e.value })
                      }
                      value={height_Size_OPtions[0]}
                    />
                  </div>
                </div>
                <div className="input-box-lcl">
                  <label htmlFor="TotalLength">Total Length*</label>
                  <div className="inputs-box">
                    <input
                      type="number"
                      placeholder="Length"
                      id="TotalLength"
                      min={1}
                      value={LCLData.Length}
                      onChange={(e) =>
                        SetLCLData({ ...LCLData, Length: e.target.value })
                      }
                    />
                    <ReactDropdown
                      options={Length_SIZE_OPtions}
                      placeholder="Length"
                      onChange={(e) =>
                        SetLCLData({ ...LCLData, Length_SIZE: e.value })
                      }
                      value={Length_SIZE_OPtions[0]}
                    />
                  </div>
                </div>
                <div className="input-box-lcl">
                  <label htmlFor="TotalWidth">Total Width*</label>
                  <div className="inputs-box">
                    <input
                      type="number"
                      placeholder="Width"
                      id="TotalWidth"
                      min={1}
                      value={LCLData.Width}
                      onChange={(e) =>
                        SetLCLData({ ...LCLData, Width: e.target.value })
                      }
                    />
                    <ReactDropdown
                      options={Width_Size_OPtions}
                      placeholder="Volume"
                      onChange={(e) =>
                        SetLCLData({ ...LCLData, Width_Size: e.value })
                      }
                      value={Width_Size_OPtions[0]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/***************** End Cargo overlay ************************/}
          <i
            class={
              FCl_or_LCL_INPUT === ""
                ? `fa-solid fa-chevron-down togle`
                : `fa-solid fa-chevron-up togle`
            }
            onClick={() =>
              FCl_or_LCL_INPUT === ""
                ? SetFCl_or_LCL_INPUT("active")
                : SetFCl_or_LCL_INPUT("")
            }
          />
        </div>
        <div className="Search-input">
          <button>Search Rate</button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default AirTransportationMethod;
