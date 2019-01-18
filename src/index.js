import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class NavBar extends React.Component {
  render() {
    return (
      <div class="top-nav">
        <div class="nav-links">
          <div>Henry Nguyen</div>
          <div href="#aboutme">About Me</div>
          <div href="#github">Github</div>
          <div href="#linkedin">LinkedIn</div>
          <div class="contact-me">Contact Me</div>
        </div>
      </div>
    )
  }
}

class LandingScreen extends React.Component {
  render() {
    return (
      <div class="introduction-screen">Hello</div>
    )
  }
}

function App() {
  return (
    <div>
      <LandingScreen />
      <NavBar />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);