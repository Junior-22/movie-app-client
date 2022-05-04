import React from "react";
import ReactDOM from "react-dom";

// import statement indicating need to bundle './index.scss'
import "./index.scss";

// Main component (will eventually use others)
class MovieApplication extends React.Component {
  render() {
    return (
      <div className="movie-app">
        <div>Welcome to my app</div>
      </div>
    );
  }
}

// Finds root of app
const container = document.getElementsByClassName("app-container")
[0];

// React to render app in the root DOM element
ReactDOM.render(React.createElement(MovieApplication), container);