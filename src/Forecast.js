import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="container bottom">
      <div className="row">
        <div class="col">
          <h5>
            Sat.
            <br />
            75° F <i className="fas fa-sun"></i>
          </h5>
        </div>
        <div className="col">
          <h5>
            Sun.
            <br />
            66 ° F <i className="fas fa-cloud-sun"></i>
          </h5>
        </div>
        <div className="col">
          <h5>
            Mon.
            <br />
            65° F <i className="fas fa-cloud"></i>
          </h5>
        </div>
        <div className="col">
          <h5>
            Tues.
            <br />
            60° F <i className="fas fa-cloud-showers-heavy"></i>
          </h5>
        </div>
      </div>
    </div>
  );
}
