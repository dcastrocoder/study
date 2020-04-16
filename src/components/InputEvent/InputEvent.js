import React, { Component } from "react";

class InputEvent extends Component {
  state = {
    text: "",
    eventoM: "",
  };

  manejador = (evento) => {
    console.log(evento.target.value);
    this.setState({
      text: evento.target.value,
      eventoM: evento.type,
    });
  };

  render() {
    return (
      <div>
        <h1> Eventos de Input</h1>
        <input
          type="text"
          onChange={this.manejador}
          onCopy={this.manejador}
          onPaste={this.manejador}
        />
        <h3>{this.state.text}</h3>
        <h4>{this.state.eventoM}</h4>
      </div>
    );
  }
}

export default InputEvent;
