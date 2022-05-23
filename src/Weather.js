import React, { useState } from "react";
import "./Weather.css";
import "./index.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "65d2465365ff42d62007012b620803eb";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(showResults);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit} className="search-bar">
            <section className="sec-search-box">
              <div className="input-group rounded search-box">
                <input
                  type="search"
                  autoComplete="off"
                  className="form-control btn-rounded btn-search-box"
                  placeholder="Search city..."
                  aria-describedby="search-addon"
                  autoFocus="on"
                  onChange={handleCityChange}
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
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
