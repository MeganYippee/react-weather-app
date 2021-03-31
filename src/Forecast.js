import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

//<p className="next">In the next few days...</p>

export default function Forecast() {
  return (
    <div className="container bottom">
      <div className="row">
        <div class="col">
          <h5>
            Sat.
            <br />
            75° F{" "}
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="goldenrod"
              size={30}
              animate={true}
            />
          </h5>
        </div>
        <div className="col">
          <h5>
            Sun.
            <br />
            66 ° F{" "}
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_DAY"
              color="goldenrod"
              size={30}
              animate={true}
            />
          </h5>
        </div>
        <div className="col">
          <h5>
            Mon.
            <br />
            65° F{" "}
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="goldenrod"
              size={30}
              animate={true}
            />
          </h5>
        </div>
        <div className="col">
          <h5>
            Tues.
            <br />
            60° F{" "}
            <ReactAnimatedWeather
              icon="RAIN"
              color="goldenrod"
              size={30}
              animate={true}
            />
          </h5>
        </div>
      </div>
    </div>
  );
}
