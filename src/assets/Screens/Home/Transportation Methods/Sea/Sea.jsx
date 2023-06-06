import React, { useState, useEffect } from "react";
import "./Sea.css";
import { CountriesData } from "../../../../../Countries";
import "react-dropdown/style.css";
import ReactDropdown from "react-dropdown";
import CountrieFlag from "../Countrie Flag/CountrieFlag";

function SeaTransportationMethod() {
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
  const [FCl_or_LCL, SetFCl_or_LCL] = useState("FCL");
  const [FCl_or_LCL_INPUT, SetFCl_or_LCL_INPUT] = useState("");
  /****************************************
  # Shipping FCl
 ******************************************/
  const [FCl, SetFCl] = useState([]);
  const [CargoFCL, SetCargoFCL] = useState("");

  useEffect(() => {
    let CargoLCLINPUT = FCl.map(
      (data) => `${data.qty}x${data.type.slice(0, 4)}`
    );
    SetCargoFCL(CargoLCLINPUT.join(","));
  }, [FCl]);

  const [Fcl_Options, SetFcl_Options] = useState([
    "20FT Container",
    "40FT Container",
    "40HC Container",
  ]);
  const [FCLData, SetFCLData] = useState({
    ContainerType: "",
    Qty: 1,
  });

  const HandleAddFcl = (type, qty, indexOfType) => {
    if (FCLData.ContainerType !== "" && FCLData.Qty !== 0) {
      SetFCl([...FCl, { type, qty }]);
      SetFCLData({
        ContainerType: "",
        Qty: 1,
      });
      let Data = [...Fcl_Options];
      Data.splice(indexOfType, 1);
      SetFcl_Options(Data);
    }
  };
  const HandleRemoveFcl = (index, type) => {
    // clone
    let Data = [...FCl];
    let NEwFclOptions = [...Fcl_Options];
    // edit
    let edit = Data.filter((da, ide) => ide !== index);
    NEwFclOptions.push(type);
    //update
    SetFCl(edit);
    SetFcl_Options(NEwFclOptions);
  };
  const HandleAddedChange = (e, index) => {
    // clone
    let Data = [...FCl];
    // edit
    const Edit = { ...Data[index], qty: e.target.value };
    //update
    Data[index] = Edit;
    SetFCl(Data);
  };
  /****************************************
  # Shipping LCL
 ******************************************/
  const [CargoLCL, SetCargoLCL] = useState("");
  const WEIGHT_SIZE_OPtions = ["KG", "LB"];
  const Volume_Size_OPtions = ["CBM", "CFT", "CIN"];
  const [LCLData, SetLCLData] = useState({
    WEIGHT: 1,
    WEIGHT_SIZE: WEIGHT_SIZE_OPtions[0],
    Volume: 1,
    Volume_Size: Volume_Size_OPtions[0],
  });

  useEffect(() => {
    const CargoLCLData =
      LCLData.WEIGHT +
      "" +
      LCLData.WEIGHT_SIZE +
      " , " +
      LCLData.Volume +
      "" +
      LCLData.Volume_Size;
    SetCargoLCL(CargoLCLData);
  }, [LCLData]);

  return (
    <React.Fragment>
      <div className="SeaTransportationMethod">
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
            placeholder="Seaport  , Sity or Zip Code"
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
                : data.unlocs
                    .join("")
                    .toLowerCase()
                    .includes(Shipping.Origen.toLowerCase())
            )
              .slice(0, 5)
              .map((data) => (
                <li
                  onClick={() =>
                    SetShipping({ ...Shipping, Origen: data.name })
                  }
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
            placeholder="Seaport  , Sity or Zip Code"
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
                : data.unlocs
                    .join("")
                    .toLowerCase()
                    .includes(Shipping.Destination.toLowerCase())
            )
              .slice(0, 5)
              .map((data) => (
                <li
                  onClick={() =>
                    SetShipping({ ...Shipping, Destination: data.name })
                  }
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
            value={FCl_or_LCL === "FCL" ? CargoFCL : CargoLCL}
          />

          {/***************** Cargo overlay ************************/}
          <div className="data-overlay">
            <div className="menu">
              <span
                className={FCl_or_LCL === "FCL" ? "active" : ""}
                onClick={() => SetFCl_or_LCL("FCL")}
              >
                <i className="fa-solid fa-dolly"></i>
                <div className="info">
                  <span>FCl</span>
                  <span>Full Container</span>
                </div>
              </span>
              <span
                className={FCl_or_LCL === "LCL" ? "active" : ""}
                onClick={() => SetFCl_or_LCL("LCL")}
              >
                <i className="fa-solid fa-boxes-stacked"></i>
                <div className="info">
                  <span>LCL</span>
                  <span>Shared Container</span>
                </div>
              </span>
            </div>
            <div className="box-data">
              {FCl_or_LCL === "FCL" ? (
                <div className="fcl-box">
                  {Fcl_Options.length > 0 ? (
                    <div className="actions">
                      <div className="input-box-fcl">
                        <label htmlFor="">Container type *</label>
                        <ReactDropdown
                          options={Fcl_Options}
                          placeholder="Type ?"
                          onChange={(e) =>
                            SetFCLData({ ...FCLData, ContainerType: e.value })
                          }
                          className="ContainerType"
                          value={Fcl_Options[0]}
                        />
                      </div>
                      <div className="input-box-fcl">
                        <label htmlFor="QTY">Qty *</label>
                        <input
                          type="number"
                          placeholder="qty"
                          min="1"
                          value={FCLData.Qty}
                          onChange={(e) =>
                            SetFCLData({ ...FCLData, Qty: e.target.value })
                          }
                          id="QTY"
                        />
                      </div>

                      <button
                        onClick={() =>
                          HandleAddFcl(
                            FCLData.ContainerType,
                            FCLData.Qty,
                            Fcl_Options.indexOf(FCLData.ContainerType)
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  ) : null}

                  <div className="data">
                    {FCl.map((data, index) => (
                      <div className="box-data-chosen">
                        <input
                          type="text"
                          value={data.type}
                          placeholder={data.type}
                          readOnly
                        />
                        <input
                          type="number"
                          value={data.qty}
                          placeholder={data.type}
                          onChange={(e) => HandleAddedChange(e, index)}
                          min={1}
                        />
                        <button
                          onClick={() => HandleRemoveFcl(index, data.type)}
                        >
                          -
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
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
                    <label htmlFor="TotalVolume">Total Volume*</label>
                    <div className="inputs-box">
                      <input
                        type="number"
                        placeholder="Volume"
                        id="TotalVolume"
                        min={1}
                        value={LCLData.Volume}
                        onChange={(e) =>
                          SetLCLData({ ...LCLData, Volume: e.target.value })
                        }
                      />
                      <ReactDropdown
                        options={Volume_Size_OPtions}
                        placeholder="Volume"
                        onChange={(e) =>
                          SetLCLData({ ...LCLData, Volume_Size: e.value })
                        }
                        value={Volume_Size_OPtions[0]}
                      />
                    </div>
                  </div>
                </div>
              )}
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
export default SeaTransportationMethod;
