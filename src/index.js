import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { ExampleComponent } from "./ExampleComponent";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ExampleComponent />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
