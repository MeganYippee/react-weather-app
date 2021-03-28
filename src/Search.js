import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <p className="card-text">Search for another city</p>

      <form id="search" action="text">
        <input
          type="text"
          placeholder="Search for a city"
          name="search"
          className="search"
          id="city-search-input"
        />
      </form>
    </div>
  );
}
