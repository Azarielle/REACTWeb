import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { randomFacts } from "./facts.js";

function DisplayName() {
  return <h1>Henry Nguyen</h1>;
}

function DisplayFacts() {
  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  return <h2> {randomFacts[getRandomIndex(randomFacts)]} </h2>;
}

function site() {
  return (
    <div>
      <DisplayName />
      <DisplayFacts array="randomFacts" />
    </div>
  );
}

ReactDOM.render(site(), document.getElementById("root"));
