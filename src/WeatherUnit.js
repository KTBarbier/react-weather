import React, { useState } from "react";
import "./Weather.css";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function convertToCelicius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherUnit">
        <h5>
          <span className="current-temp">
            {Math.round(props.fahrenheit)}
            <span className="unit">
              °F |
              <a href="/" onClick={convertToCelicius}>
                °C
              </a>
            </span>
          </span>
        </h5>
      </div>
    );
  } else {
    let celcius = ((props.fahrenheit - 32) * 5) / 9;

    return (
      <div className="WeatherUnit">
        <h5>
          <span className="current-temp">
            {Math.round(celcius)}
            <span className="unit">
              <a href="/" onClick={showFahrenheit}>
                °F
              </a>{" "}
              | °C
            </span>
          </span>
        </h5>
      </div>
    );
  }
}
