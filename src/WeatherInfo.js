import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="parent">
        <div className="narrow">
          <h1 className="display-city">{props.data.city}</h1>
          <span className="todays-conditions">
            <ul>
              <li className="current-date">
                <FormattedDate date={props.data.date} />
              </li>
            </ul>
            <img src={props.data.iconUrl} alt="" />
            <ul>
              <h5>
                <span className="current-temp">
                  {Math.round(props.data.temperature)}°
                </span>
              </h5>
              <li className="description text-capitalize">
                {props.data.description}
              </li>
              <li className="real-feel">
                Feels Like: {Math.round(props.data.realFeel)}°
              </li>
              <li className="humidity">Humidity: {props.data.humidity}%</li>
              <li className="wind-speed">
                Wind: {Math.round(props.data.windSpeed)} mph
              </li>
            </ul>
          </span>
        </div>
        <div className="wide">
          <div className="weather-forecast"></div>
          <br />
          <footer>
            <p>
              <a
                href="https://github.com/KTBarbier/react-weather"
                rel="noreferrer"
                target="_blank"
              >
                Open-source code
              </a>
              <br />
              by Kristen Trahan Barbier
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
