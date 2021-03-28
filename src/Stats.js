import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";
import "./Stats.css";

export default function Stats() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container top">
        <div className="row align-items-start">
          <div className="col">
            <h4>
              Humidity: {weatherData.humidity}%
              <br />
              Wind: {weatherData.wind}
              <br />
              <span className="text-capitalize">{weatherData.description}</span>
            </h4>
          </div>
          <div className="col-6">
            <h1>
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="goldenrod"
                size={30}
                animate={true}
              />
              <span id="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                <button rel="noreferrer" href="#" id="fahrenheit">
                  °F
                </button>{" "}
                |
                <button rel="noreferrer" href="#" id="celcius">
                  {" "}
                  °C
                </button>
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
  } else {
    let apiKey = `2e24fad2691944b008429f223f37670a`;
    let city = `San Diego`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
