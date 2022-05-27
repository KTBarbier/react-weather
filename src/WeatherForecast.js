import React from "react";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="wide">
        <div className="weather-forecast">
          <div className="row">
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    alt=""
                    className="icons"
                  />
                  <div className="WeatherForecast-day">Fri</div>
                  <div className="WeatherForecast-description">
                    Partly Cloudy
                  </div>
                  <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">90°</span>
                    <span className="WeatherForecast-temperature-min">80°</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    alt=""
                    className="icons"
                  />
                  <div className="WeatherForecast-day">Fri</div>
                  <div className="WeatherForecast-description">
                    Partly Cloudy
                  </div>
                  <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">90°</span>
                    <span className="WeatherForecast-temperature-min">80°</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    alt=""
                    className="icons"
                  />
                  <div className="WeatherForecast-day">Fri</div>
                  <div className="WeatherForecast-description">
                    Partly Cloudy
                  </div>
                  <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">90°</span>
                    <span className="WeatherForecast-temperature-min">80°</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    alt=""
                    className="icons"
                  />
                  <div className="WeatherForecast-day">Fri</div>
                  <div className="WeatherForecast-description">
                    Partly Cloudy
                  </div>
                  <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">90°</span>
                    <span className="WeatherForecast-temperature-min">80°</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    alt=""
                    className="icons"
                  />
                  <div className="WeatherForecast-day">Fri</div>
                  <div className="WeatherForecast-description">
                    Partly Cloudy
                  </div>
                  <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">90°</span>
                    <span className="WeatherForecast-temperature-min">80°</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    alt=""
                    className="icons"
                  />
                  <div className="WeatherForecast-day">Fri</div>
                  <div className="WeatherForecast-description">
                    Partly Cloudy
                  </div>
                  <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">90°</span>
                    <span className="WeatherForecast-temperature-min">80°</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <footer>
          <p>
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
    </div>
  );
}
