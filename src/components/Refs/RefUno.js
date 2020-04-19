import React, { Component } from "react";

class Entrada extends Component {
  componentDidMount() {
    this.focus();
    // EL componentDidMount ejecuta todo apenas se carga. Se llama el método focus para activarlo.
  }

  // Nombre de la ref
  entrada = React.createRef();

  focus = () => {
    this.entrada.current.focus();
    console.log(this.entrada);
  };
  blur = () => {
    this.entrada.current.blur();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.entrada} />
        <button onClick={this.focus}>Focus</button>
        <button onClick={this.blur}>Blur</button>
      </div>
    );
  }
}

class RefUno extends Component {
  render() {
    return (
      <div>
        <hr />
        <h1> Qué son las Refs en React</h1>
        <p>
          Según la documentación de React.js, las refs son una forma de acceder
          a elementos del DOM o a elementos React creados en el método render.
          Por ejemplo poner el focus en un input como en este ejemplo.
          <Entrada />
        </p>
      </div>
    );
  }
}

export default RefUno;
