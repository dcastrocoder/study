import React from "react";
import ReactDOM from "react-dom";

const FrutasFrescas = (props) => (
  <div>
    <h1>{props.name} </h1>
    <h3>{props.descripcion} </h3>
    <h3>${props.precio} </h3>
  </div>
);

const App = () => (
  <div>
    <FrutasFrescas name="Manzana" descripcion="dulce" precio={2.0} />
    <FrutasFrescas name="Lulo" descripcion="ácido" precio={2.0} />
    <FrutasFrescas name="Pera" descripcion="dulce" precio={2.0} />
  </div>
);

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
