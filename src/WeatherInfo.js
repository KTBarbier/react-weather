import React from "react";
import FormattedDate from "./FormattedDate";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherUnit from "./WeatherUnit";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="display-city">{props.data.city}</h1>
      <span className="todays-conditions">
        <ul>
          <li className="current-date"></li>
        </ul>
        <img src={props.data.iconUrl} alt="" />
        <ul>
          <WeatherUnit fahrenheit={props.data.temperature} />
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
          <FormattedDate date={props.data.date} />
        </ul>
      </span>
    </div>
  );
}
