import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div className="paragraph">
      This project was coded by, <a href="/">Sthandiwe Msweli</a> and is{" "}
      <a href="https://github.com/sthandiwe3561/weather-app">
        Open-source code
      </a>{" "}
      and{" "}
      <a href="https://gentle-medovik-598532.netlify.app/">hosted on Netlify</a>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
