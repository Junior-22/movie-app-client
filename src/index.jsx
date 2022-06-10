import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import movieApp from "./reducers/reducers";
import MainView from "./components/main-view/main-view";

// import statement indicating need to bundle './index.scss'
import "./index.scss";

const movieAppStore = createStore(movieApp, devToolsEnhancer());

// Main component (will eventually use others)
class MovieApplication extends React.Component {
  render() {
    return (
      <Provider store={movieAppStore}>
        <Container className="movie-app">
          <MainView />
        </Container>
      </Provider>
    );
  }
}

// Finds root of app
const container = document.getElementsByClassName("app-container")
[0];

// React to render app in the root DOM element
ReactDOM.render(React.createElement(MovieApplication), container);