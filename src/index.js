import React from "react";
import ReactDOM from "react-dom";

class FrutasFrescas extends React.Component {
  // es lo primero que se ejecuta
  // las propiedades dentro d una clase siempre se refieren a ellas como this
  constructor() {
    super();
    this.state = {
      cantidad: 10,
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.name} </h1>
        <h3>{this.props.descripcion} </h3>
        <h3>Cantidad: {this.state.cantidad}</h3>
        <button
          onClick={() => {
            this.setState({ cantidad: this.state.cantidad + 1 });
            // setState se usa para actualizar estado del componente.
          }}
        >
          Agregar
        </button>
        <h3>${this.props.precio} </h3>
      </div>
    );
  }
}

const App = () => (
  <div>
    <FrutasFrescas name="Manzana" descripcion="dulce" precio={2.0} />
    <FrutasFrescas name="Lulo" descripcion="ácido" precio={2.0} />
    <FrutasFrescas name="Pera" descripcion="dulce" precio={2.0} />
  </div>
);

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
