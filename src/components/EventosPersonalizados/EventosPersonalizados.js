import React, { Component } from "react";

class Hijo extends Component {
  manejadorClic = () => {
    this.props.onSaluda("Ninja en React 🔥");
  };

  render() {
    return (
      <div>
        <h1>Soy el Hijo</h1>
        <button onClick={this.manejadorClic}>Saluda</button>
      </div>
    );
  }
}

class EventosPersonalizados extends Component {
  state = {
    name: "",
  };

  manejador = (name) => {
    this.setState({ name: name });
  };

  render() {
    return (
      <div>
        <h1>Eventos Personalizados con React</h1>

        <Hijo onSaluda={this.manejador} />
        <h1> {this.state.name}</h1>
      </div>
    );
  }
}

export default EventosPersonalizados;
