import React from "react";

const style = {
  height: "200px",
  background: "gold",
  padding: "1em",
  boxSizing: "border-box",
};

class MouserEvents extends React.Component {
  state = {
    x: 0,
    y: 0,
  };

  manejador = (evento) => {
    this.setState({
      x: evento.clientX,
      y: evento.clientY,
    });
  };

  render() {
    return (
      <div style={style} onMouseMove={this.manejador}>
        <h1> Eventos del mouse</h1>
        <p>X={this.state.x}</p>
        <p>y={this.state.y}</p>
      </div>
    );
  }
}

export default MouserEvents;
