import React, { Component } from "react";

class RenderCondiciona extends Component {
  state = {
    muestraMensaje: "Intentalo",
  };

  mostrar = () => {
    this.setState({
      muestraMensaje: "Este es un saludo especial 😄",
    });
  };

  ocultar = () => {
    this.setState({
      muestraMensaje: "Ho hay saudos para ti 😫",
    });
  };

  render() {
    const Saludo = (props) => {
      if (props.saluda) {
        return <h1> Hola, tu eres genial </h1>;
      }

      return <h1> No hay saludos</h1>;
    };

    return (
      <div>
        <h1>Renderizado condicional</h1>
        <h1>{this.state.muestraMensaje}</h1>
        <button onClick={this.mostrar}>Saludar</button>
        <button onClick={this.ocultar}>No Saludar</button>
        <Saludo saluda={true} />
      </div>
    );
  }
}

export default RenderCondiciona;
