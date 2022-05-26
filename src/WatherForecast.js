import React, { useState } from "react";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
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
              Open-source code{" "}
            </a>
            by Kristen Trahan Barbier
          </p>
        </footer>
      </div>
    </div>
  );
}
