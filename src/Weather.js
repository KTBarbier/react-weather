import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    day: "Tuesday",
    time: "10:00",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    temperature: 19,
    description: "Cloudy",
    feelsLike: 17,
    humidity: 80,
    wind: 10,
  };

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
                <li className="current-date">{weatherData.day}</li>
                <li className="current-time">{weatherData.time}</li>
              </ul>
              <img src={weatherData.imgUrl} className="main-icon" alt="sunny" />
              <ul>
                <h5>
                  <span className="current-temp">
                    {weatherData.temperature}°
                  </span>
                </h5>
                <li className="description">{weatherData.description}</li>
                <li className="real-feel">
                  feels like: {weatherData.feelsLike}°
                </li>
                <li className="humidity">humidity: {weatherData.humidity}%</li>
                <li className="wind-speed">Wind speed: {weatherData.wind}</li>
              </ul>
            </span>
          </div>
          <div className="wide">
            <div className="weather-forecast"></div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
