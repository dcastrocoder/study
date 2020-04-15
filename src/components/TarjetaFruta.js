import React from "react";
// import "./styles/frutas.css";

import styles from "./styles/Frutas.module.css";
// Se importa el módulo asignando un nombre cualquiera

class TarjetaFruta extends React.Component {
  state = {
    cantidad: 0,
  };
  // Las arrow functions heredan el this del padre
  agregar = () =>
    this.setState({
      cantidad: this.state.cantidad + 1,
    });

  quitar = () => {
    this.setState({
      cantidad: this.state.cantidad - 1,
    });
  };

  limpiar = () => {
    this.setState({
      cantidad: 0,
    });
  };

  render() {
    const hasItems = this.state.cantidad > 0;
    const activeClass = hasItems ? styles["card-active"] : "";
    const clases = styles.card + " " + activeClass;

    return (
      <div className={clases}>
        <h3>{this.props.name}</h3>
        <div>Cantidad: {this.state.cantidad}</div>
        <button onClick={this.agregar}> + </button>
        <button onClick={this.quitar}> - </button>
        <button onClick={this.limpiar}> Limpiar</button>
        <hr />
        <p>$ {this.props.price}</p>
      </div>
    );
  }
}

export default TarjetaFruta;
