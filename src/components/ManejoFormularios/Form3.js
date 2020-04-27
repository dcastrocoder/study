import React, { Component } from "react";

class Form3 extends Component {
  state = {
    active: false,
  };

  handleChange = (event) => {
    this.setState({
      active: event.target.checked,
    });
  };
  render() {
    return (
      <div>
        {this.state.active && (
          <div>
            <hr />
            <h1>Ocultar / Mostrar</h1>
          </div>
        )}
        <h1>Ejemplo de Input Check Box </h1>
        <form>
          <input
            type="checkbox"
            checked={this.state.active}
            onChange={this.handleChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default Form3;
