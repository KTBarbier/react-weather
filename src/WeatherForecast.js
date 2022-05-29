import React, { useState } from "react";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div>
        <div className="WeatherForecast">
          <div className="wide">
            <div className="weather-forecast">
              <div className="row">
                {forecast.map(function (dailyForecast, index) {
                  if (index > 0 && index < 7) {
                    return (
                      <div className="col-4" key={index}>
                        <WeatherForecastDay data={dailyForecast} />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
        <br />
        <footer>
          <p className="WeatherForecast-footer">
            <a
              href="https://github.com/KTBarbier/react-weather"
              rel="noreferrer"
              target="_blank"
            >
              Open-source code{" "}
            </a>
            by Kristen Trahan Barbier
          </p>
        </footer>
      </div>
    );
  } else {
    let apiKey = "4acb7c56fc6e9f11da6c15d8f2d09ac8";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
