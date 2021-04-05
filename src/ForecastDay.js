import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <h5>
      {day()}
      <br />
      <WeatherIcon code={props.data.weather[0].icon} /> <br />
      <span className="max">{Math.round(props.data.temp.max)}°</span>{" "}
      <span className="min">{Math.round(props.data.temp.min)}° </span>
    </h5>
  );
}
