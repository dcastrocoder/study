import React, { Component } from "react";

class Form1 extends Component {
  state = {
    tech: "Vanilla",
  };

  handleChange = (event) => {
    this.setState({
      tech: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h1> Ejemplo de formulario con etiqueta Select</h1>
        <form>
          <select value={this.state.tech} onChange={this.handleChange}>
            <option value="Angular">Angular</option>
            <option value="NodeJs">NodeJs</option>
            <option value="React">React</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>
        <h2>{this.state.tech} </h2>
      </div>
    );
  }
}

export default Form1;
