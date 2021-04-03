import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

//<p className="next">In the next few days...</p>

export default function Forecast() {
  function handleForecast(response) {
    console.log(response.data);
  }

  let apiKey = "2e24fad2691944b008429f223f37670a";
  let lon = 40.7;
  let lat = 74;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleForecast);

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
      </div>
    </div>
  );
}
