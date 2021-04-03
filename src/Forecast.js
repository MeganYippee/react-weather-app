import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

//<p className="next">In the next few days...</p>

export default function Forecast() {
  return (
    <div className="container bottom">
      <div className="row forecast">
        <div class="col">
          <h5>
            Sat.
            <br />
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="goldenrod"
              size={30}
              animate={true}
            />{" "}
            <br />
            75° F
          </h5>
        </div>
        <div className="col">
          <h5>
            Sun.
            <br />
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_DAY"
              color="goldenrod"
              size={30}
              animate={true}
            />{" "}
            <br />
            66 ° F{" "}
          </h5>
        </div>
        <div className="col">
          <h5>
            Mon.
            <br />
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="goldenrod"
              size={30}
              animate={true}
            />{" "}
            <br />
            65° F{" "}
          </h5>
        </div>
        <div className="col">
          <h5>
            Tues.
            <br />
            <ReactAnimatedWeather
              icon="RAIN"
              color="goldenrod"
              size={30}
              animate={true}
            />{" "}
            <br />
            60° F{" "}
          </h5>
        </div>
      </div>
    </div>
  );
}
