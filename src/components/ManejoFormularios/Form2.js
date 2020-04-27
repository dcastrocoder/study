import React, { Component } from "react";

class Form2 extends Component {
  state = {
    techs: ["Vanilla"],
  };

  handleChange = (event) => {
    const techs = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );

    this.setState({ techs });
  };

  render() {
    return (
      <div>
        <hr />
        <h1> Ejemplo de formulario con etiqueta Select: Selección Múltiple</h1>
        <form>
          <select
            value={this.state.techs}
            onChange={this.handleChange}
            multiple
          >
            <option value="Angular">Angular</option>
            <option value="NodeJs">NodeJs</option>
            <option value="React">React</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>
        <ul>
          {this.state.techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Form2;
