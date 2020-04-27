import React, { Component } from "react";

class InputControlado extends Component {
  state = {
    text: "",
    color: "E8E8E8",
  };

  actualizar = (event) => {
    const text = event.target.value;

    let color = "green";

    if (text.trim() === "") {
      color = "E8E8E8";
    }
    if (text.trim() !== "" && text.trim().length < 5) {
      color = "red";
    }
    this.setState({ text, color });

    //  Propagando datos al padre
    this.props.onChange(this.props.name, text);
  };

  render() {
    const styles = {
      border: `1px solid ${this.state.color}`,
      padding: "0.3em 0.6em",
      outline: "none",
    };
    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.name}:</label>

        <input
          type="text"
          value={this.state.text}
          onChange={this.actualizar}
          style={styles}
          placeholder={this.props.placeholder}
          id={this.props.name}
        ></input>
      </div>
    );
  }
}

class Input3 extends Component {
  state = {
    nombre: "",
    email: "",
  };

  actualizar = (name, text) => {
    this.setState({
      [name]: text,
    });
  };
  render() {
    return (
      <div>
        <hr />
        <h1>Manejando Inputs controlados con React</h1>
        <p>
          Hacer que los datos se puedan propagar para poderlos usar en el
          componente padre y hacer que el componente pueda ser reutilizable
        </p>
        <InputControlado
          onChange={this.actualizar}
          placeholder="Nombre Completo"
          name="name"
        />
        <InputControlado
          onChange={this.actualizar}
          placeholder="Tu email"
          name="email"
        />
        <h2>Nombre: {this.state.name}</h2>
        <h2>Email: {this.state.email}</h2>
      </div>
    );
  }
}

export default Input3;
