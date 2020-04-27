import React, { Component } from "react";

const Unicorn = () => (
  <span role="img" aria-label="unicornio">
    🦄
  </span>
);

class InputNoControlado extends Component {
  // llega a "event" el objeto del evento con la información del formulario
  handleSubmit = (event) => {
    event.preventDefault();
    // preventDefault(); evita que al presionar clic en enviar del formulario se recargue toda la página

    //target hace referencia al propio formulario form
    const name = event.target[0].value;
    // event.target[] podemos acceder a los elementos del form en orden por índice como si
    // fuera un array
    const email = event.target[1].value;

    this.props.onSend({ name, email });
    // esto propaga los datos para que el padre Input2 los obtenta
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Escuchador de eventos de react llamado onSUbmit que es llamado cuando se hace
        clic en el último elemento que sea de tipo botón */}
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Email" />
          <button>Botón</button>
        </form>
      </div>
    );
  }
}

class Input2 extends Component {
  send = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <hr />
        <h1> Manejando Inputs no controlados con Formularios</h1>
        <p>
          Existes dos formas de extraer datos desde elementos de formulario en
          React. Esto es a través de lo que se conoce como Inputs controlados e
          Inputs no controlados.
          <strong>
            Esta sección explicará la extracción de datos a través de Inputs no
            controlados
          </strong>
        </p>
        <Unicorn />
        <InputNoControlado onSend={this.send} />
      </div>
    );
  }
}

export default Input2;
