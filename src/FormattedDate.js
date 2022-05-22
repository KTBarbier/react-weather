import React from "react";
import "./Weather.css";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours >= 13) {
    hours = hours - 12;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      <p className="dateTime">
        <small>Last updated:</small>
        <br />
        <strong>{day}</strong> <small>at</small>{" "}
        <strong>
          {hours}:{minutes}
        </strong>
      </p>
    </div>
  );
}
