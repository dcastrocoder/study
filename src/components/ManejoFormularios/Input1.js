import React, { Component } from "react";

const Unicorn = () => (
  <span role="img" aria-label="unicornio">
    🦄
  </span>
);

class InputNoControlado extends Component {
  nombre = React.createRef();
  email = React.createRef();

  handleClick = () => {
    const name = this.nombre.current.value;
    const email = this.email.current.value;

    this.props.onSend({ name, email });
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.nombre} placeholder="Nombre" />
        <input type="text" ref={this.email} placeholder="Email" />
        <button onClick={this.handleClick}>Botón</button>
      </div>
    );
  }
}

class Input1 extends Component {
  send = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <hr />
        <h1> Manejando Inputs no controlados con Refs</h1>
        <p>
          Existes dos formas de extraer datos desde elementos de formulario en
          React. Esto es a través de lo que se conoce como Inputs controlados e
          Inputs no controlados.
          <strong>
            Esta sección explicará la extracción de datos a través de Inputs no
            controlados.
            <br />
          </strong>
          Su ventaja es que es más fácil de desarrollar y se dispone de algún
          acercamiento al estilo de HTML. <br />
          <strong>La principal desventaja</strong> es que no se puede ir
          revisando o evaluando a medida que ésta cambia. Puesto que sólo
          tenemos la información hasta que el usuario presiona clic en enviar.
        </p>
        <Unicorn />
        <InputNoControlado onSend={this.send} />
      </div>
    );
  }
}

export default Input1;
