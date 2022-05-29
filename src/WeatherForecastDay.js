import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <img
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt=""
            className="icons"
          />
          <div className="WeatherForecast-day">{day()}</div>
          <div className="WeatherForecast-description">
            {props.data.weather[0].main}
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">
              {Math.round(props.data.temp.max)}°
            </span>
            <span className="WeatherForecast-temperature-min">
              {Math.round(props.data.temp.min)}°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
