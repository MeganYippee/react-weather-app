import React from "react";
import "./Main.css";
import Forecast from "./Forecast";
import Stats from "./Stats";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.css";

export default function Header() {
  return (
    <div className="card">
      <div className="card-body">
        <h3 id="today-is">Today is Friday, December 25, 2020 at 15:00</h3>
        <h1 className="city" id="city">
          <strong> San Diego </strong>
        </h1>
        <Stats />
        <p className="next">In the next few days...</p>
        <Forecast />
        <Search />
      </div>
    </div>
  );
}
