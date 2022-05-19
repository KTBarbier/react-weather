import React, { useState } from "react";
import "./Weather.css";
import "./index.css";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [realFeel, setRealFeel] = useState("");
  let [humidity, setHumidity] = useState("");
  let [windSpeed, setWindSpeed] = useState("");
  let [iconCode, setIconCode] = useState("");
  let city = props.city;
  let apiKey = "65d2465365ff42d62007012b620803eb";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=houston&appid=${apiKey}&units=imperial`;
  let [iconUrl, setIconUrl] = useState("");
  axios.get(url).then(showResults);

  function showResults(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].main);
    setRealFeel(Math.round(response.data.main.feels_like));
    setHumidity(response.data.main.humidity);
    setWindSpeed(Math.round(response.data.wind.speed));
    setIconCode(response.data.weather[0].icon);
    setIconUrl(`http://openweathermap.org/img/wn/${iconCode}@2x.png`);
  }

  return (
    <div className="Weather">
      <div className="container">
        <form className="search-bar">
          <section className="sec-search-box">
            <div className="input-group rounded search-box">
              <input
                type="search"
                autoComplete="off"
                className="form-control btn-rounded btn-search-box"
                placeholder="Search city..."
                aria-describedby="search-addon"
              />
              <button className="submit-city">
                <span
                  className="input-group-text border-gray search-box-icon"
                  role="img"
                  aria-label="search-emoji"
                >
                  🔍
                  <i className="fas fa-search"></i>
                </span>
              </button>
            </div>
          </section>
        </form>
        <div className="parent">
          <div className="narrow">
            <h1 className="display-city">{city}</h1>
            <span className="todays-conditions">
              <ul>
                <li className="current-date">{}</li>
                <li className="current-time">{}</li>
              </ul>
              <img src={iconUrl} alt="" />
              <ul>
                <h5>
                  <span className="current-temp">{temperature}°</span>
                </h5>
                <li className="description">{description}</li>
                <li className="real-feel">feels like: {realFeel}°</li>
                <li className="humidity">humidity: {humidity}%</li>
                <li className="wind-speed">wind speed: {windSpeed} mph</li>
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
    </div>
  );
}
