import React, { Component } from "react";

class IterandoPropiedadesObj extends Component {
  state = {
    user: {
      name: "Jota D castro",
      job: "Ingenieer",
      addrees: " call 1 # 2-34",
    },
  };

  render() {
    //   Se extrae el objeto de user con destructuración que llega desde state
    // se usa el método keys de Object el cual recibe un objeto,
    //  que retorna un array con los nombres de cada una de propiedades
    const { user } = this.state;
    const keys = Object.keys(user);

    return (
      <div>
        <hr />
        <h1>
          Iterando propiedades de Objetos
          <span role="img" aria-label="unicornio">
            🐯
          </span>
        </h1>
        <ul>
          {keys.map((key, index) => (
            <li key={key + index}>
              <strong>{key}:</strong> {user[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default IterandoPropiedadesObj;
