import React, { useState } from "react";
import Formatted from "./Formatted";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemp from "./WeatherTemp";
import "bootstrap/dist/css/bootstrap.css";
import "./Main.css";
import axios from "axios";

export default function Header(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data.weather[0].icon);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function search() {
    let apiKey = `2e24fad2691944b008429f223f37670a`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleNewCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="seach">
      <p className="card-text">Search for another city</p>
      <form id="search" action="text" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a city"
          name="search"
          className="search"
          onChange={handleNewCity}
          id="city-search-input"
        />
      </form>
    </div>
  );

  if (weatherData.ready) {
    return (
      <div className="card">
        <div className="card-body">
          <h3 id="today-is">
            Today is <Formatted date={weatherData.date} />
          </h3>
          <h1 className="city" id="city">
            <strong> {weatherData.city} </strong>
          </h1>

          <div className="container top">
            <div className="row align-items-start">
              <div className="col">
                <h4>
                  Humidity: {weatherData.humidity}%
                  <br />
                  Wind: {Math.round(weatherData.wind)} mph
                  <br />
                  <span className="text-capitalize">
                    {weatherData.description}
                  </span>
                </h4>
              </div>
              <div className="col-1">
                <h1>
                  <WeatherIcon code={weatherData.icon} />
                </h1>
              </div>
              <div className="col">
                <h1>
                  <WeatherTemp fah={weatherData.temperature} />
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
          {form}
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
