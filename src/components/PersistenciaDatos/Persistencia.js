import React, { Component } from "react";

class Persistencia extends Component {
  state = {
    color: "red",
  };
  handlerChange = (event) => {
    console.log(event.target.value);

    const color = event.target.value;
    this.setState((state) => ({
      color,
    }));
  };

  render() {
    return (
      <div>
        <h1>Persistencia de Eventos</h1>
        <input type="text" onChange={this.handlerChange} />
        {/* OnChande se deispara al digitar algo en el Input */}
        <h3 style={{ color: this.state.color }}>{this.state.color}</h3>
      </div>
    );
  }
}

export default Persistencia;
