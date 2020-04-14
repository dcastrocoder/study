import React from "react";
import ReactDOM from "react-dom";

const Datos = {
  Nombre: "Jhonatan ",
  Apellido: "Delgado",
  Edad: "33",
};

function getInfo(user) {
  return `Esta es otra manera. ${user.Nombre} ${user.Apellido}`;
}

const App = (
  <div>
    <h1>
      Hola mundo, mi nombre es {Datos.Nombre} {Datos.Apellido}
    </h1>
    <p>Mi edad multiplicada es {Datos.Edad * 2}</p>
    <p>{getInfo(Datos)}</p>
  </div>
);

const root = document.getElementById("root");

ReactDOM.render(App, root);
