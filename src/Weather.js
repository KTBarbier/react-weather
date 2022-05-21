import React, { useState } from "react";
import "./Weather.css";
import "./index.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showResults(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      realFeel: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      iconCode: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "65d2465365ff42d62007012b620803eb";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(showResults);
  }

  if (weatherData.ready) {
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
              <h1 className="display-city">{weatherData.city}</h1>
              <span className="todays-conditions">
                <ul>
                  <li className="current-date">
                    <FormattedDate date={weatherData.date} />
                  </li>
                  <li className="current-time">{"8:00"}</li>
                </ul>
                <img src={weatherData.iconUrl} alt="" />
                <ul>
                  <h5>
                    <span className="current-temp">
                      {Math.round(weatherData.temperature)}°
                    </span>
                  </h5>
                  <li className="description text-capitalize">
                    {weatherData.description}
                  </li>
                  <li className="real-feel">
                    Feels Like: {Math.round(weatherData.realFeel)}°
                  </li>
                  <li className="humidity">
                    Humidity: {weatherData.humidity}%
                  </li>
                  <li className="wind-speed">
                    Wind: {Math.round(weatherData.windSpeed)} mph
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
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
