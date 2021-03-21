import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Stats() {
  return (
    <div className="container top">
      <div className="row align-items-start">
        <div className="col">
          <h4>
            Percipitation: 10%
            <br />
            Wind: 3mph
            <br />
            Sunny
          </h4>
        </div>
        <div className="col-6">
          <h1>
            <i className="fas fa-sun"></i>
            <span id="temperature">77</span>
            <span className="units">
              <a href="#" id="fahrenheit">
                °F
              </a>{" "}
              |
              <a href="#" id="celcius">
                {" "}
                °C
              </a>
            </span>
            <br />
            <div className="content" align="center">
              <button
                type="button"
                className="btn btn-primary pull-right"
                id="current-location"
              >
                Current Location
              </button>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}