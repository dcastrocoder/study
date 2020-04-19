import React, { Component } from "react";
const users = [
  { id: 1, name: "Gerado Gallegos", country: "Mexico" },
  { id: 2, name: "Leanne Graham", country: "USA" },
  { id: 3, name: "Ervin Howell", country: "Colombia" },
  { id: 4, name: "Rodrigo Fernandez", country: "Peru" },
  { id: 5, name: "Alfredo Bauch", country: "Guatemala" },
  { id: 6, name: "Fernanda Valencia", country: "España" },
];

class PropKeyParaIterar extends Component {
  render() {
    return (
      <div>
        <hr />
        <h1>Reiterando con Keys</h1>
        <p>
          EN React es necesario utilizar keys para iterar. React lo utiliza para
          redenrizar cambios lo que lo hace muy potente, pero para eso necesita
          la propiedad key.
        </p>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </div>
    );
  }
}

export default PropKeyParaIterar;
