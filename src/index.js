import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Main from "./Main";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Main />
    <p>
      <a
        href="https://github.com/MeganYippee/react-weather-app"
        rel="noreferrer"
        target="_blank"
      >
        Open source code
      </a>
      , by{" "}
      <a href="https://github.com/MeganYippee" rel="noreferrer" target="_blank">
        Megan Yip
      </a>
    </p>
  </StrictMode>,
  rootElement
);
