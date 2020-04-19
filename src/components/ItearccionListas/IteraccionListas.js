import React, { Component } from "react";

class IteraccionListas extends Component {
  render() {
    const Frutas = ["fresa", "manana", "uva", "mango", "pera", "kiwi"];
    return (
      <div>
        <hr />
        <h1> Iterancción en listas</h1>
        <p>
          El método map realiza una iteracción por cada elemento del array. El
          Mp recibe una función que se ejecuta por cada elemento del array,
          dentro de dicha función se debe retornar el nuevo valor.
        </p>
        <ul>
          {Frutas.map((fruta, index) => {
            return <li key={23 + index}>{fruta}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default IteraccionListas;
