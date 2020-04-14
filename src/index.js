import React from "react";
import ReactDOM from "react-dom";

const FrutasFrescas = (props) => (
  <div>
    <h1>Frutas </h1>
    <h3>Descripción </h3>
  </div>
);

const App = () => (
  <div>
    <FrutasFrescas />
    <FrutasFrescas />
    <FrutasFrescas />
  </div>
);

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
