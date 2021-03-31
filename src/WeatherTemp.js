import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fah");
  function showCel(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function showFah(event) {
    event.preventDefault();
    setUnit("fah");
  }

  if (unit === `fah`) {
    return (
      <div className="WeatherTemp">
        <span id="temperature">{Math.round(props.fah)}</span>
        <span className="units">
          °F |
          <a href="/" id="celcius" onClick={showCel}>
            {" "}
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celcius = ((props.fah - 32) * 5) / 9;

    return (
      <div>
        <span id="temperature">{Math.round(celcius)}</span>
        <span className="units">
          <a href="/" id="fahrenheit" onClick={showFah}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
