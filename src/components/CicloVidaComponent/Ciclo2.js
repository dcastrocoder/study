import React, { Component } from "react";

class Ciclo2 extends Component {
  constructor(props) {
    super(props);

    this.agregar = this.agregar.bind(this);

    this.state = {
      message: "Hola Ninja",
      num: 0,
    };
  }
  agregar() {
    this.setState((state) => ({
      num: state.num + 1,
    }));
  }

  render() {
    return (
      <div>
        <h2> Constructor</h2>
        <p>
          Es es primer método que se ejecuta en la etapa de montaje. Puede ser
          últil para poder ininicializar valores
        </p>
        <h4>{this.state.message}</h4>
        <button onClick={this.agregar}>Clic ({this.state.num})</button>
      </div>
    );
  }
}

export default Ciclo2;
