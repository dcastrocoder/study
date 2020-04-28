import React, { Component } from "react";

const lista = (
  <ul>
    <li>lista</li>
    <li>lista</li>
    <li>lista</li>
  </ul>
);

class Ciclo3 extends Component {
  render() {
    return (
      <div>
        <h1> Método Render</h1>
        <p>
          Cuando utilizamos componentes basados en clases, el método render es
          el único necesario para que el componente funcione.
          <br />
          Dentro del método render podemos crear toda la lógica que necesitemos
          para poder montar uno u otro contenido.
        </p>
        {lista}
      </div>
    );
  }
}

export default Ciclo3;
