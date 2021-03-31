import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fah");
  function showCel(event) {
    event.preventDefault();
    setUnit("Celcius");
  }

  function showFah(event) {
    event.preventDefault();
  }

  if (unit === `fah`) {
    return (
      <div className="WeatherTemp">
        <span id="temperature">{Math.round(props.fah)}</span>
        <span className="units">
          <a href="/" id="fahrenheit">
            °F
          </a>{" "}
          |
          <a href="/" id="celcius" onClick={showCel}>
            {" "}
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span id="temperature">{Math.round(props.fah)}</span>
        <span className="units">
          <a href="/" id="fahrenheit" onClick={showFah}>
            °F
          </a>{" "}
          |
          <a href="/" id="celcius">
            {" "}
            °C
          </a>
        </span>
      </div>
    );
  }
}
