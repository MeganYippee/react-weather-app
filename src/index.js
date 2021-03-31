import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Main defaultCity="San Diego" />
    <div className="footer">
      <footer>
        This project was coded by{" "}
        <a href="https://www.meganyipart.com/" rel="noreferrer" target="_blank">
          Megan Yip
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/MeganYippee/react-weather-app"
          rel="noreferrer"
          target="_blank"
        >
          open source code.
        </a>
      </footer>
    </div>
  </StrictMode>,
  rootElement
);
