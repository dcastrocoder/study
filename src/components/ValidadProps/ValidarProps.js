import React, { Component } from "react";
import PropTypes from "prop-types";

class Datos extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    email: PropTypes.string,
  };

  render() {
    const { name, bio, email } = this.props;

    return (
      <div>
        <hr />
        <h1> Validar Props</h1>
        <p>
          Permite configurar el tipo de datos de las props, además de indicar si
          es obligatorio o no unos de las propiedades de la props
        </p>
        <h3>{name}</h3>
        <p>{bio}</p>
        <p>{email}</p>
      </div>
    );
  }
}

class ValidarProps extends Component {
  render() {
    return (
      <Datos name="Johnatan" bio="Programador" email="jdc@sietegigas.com" />
    );
  }
}

export default ValidarProps;
