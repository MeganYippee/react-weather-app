import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Main from "./Main";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Main defaultCity="San Diego" />
    <p>
      <a
        href="https://github.com/MeganYippee/react-weather-app"
        rel="noreferrer"
        target="_blank"
      >
        Open source code
      </a>
      , by{" "}
      <a href="https://www.meganyipart.com/" rel="noreferrer" target="_blank">
        Megan Yip
      </a>
    </p>
  </StrictMode>,
  rootElement
);
