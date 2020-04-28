import React, { Component } from "react";

class Ciclo1 extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h2 className="">Métodos de Ciclo de vida</h2>
          <p className="lead">
            Los métodos de ciclo de vida únicamente se aplican a los ocmponentes
            basados en clases. Sin embargo en las recientes versiones se han
            integrad los Hooks, con la cual podemos añadir o simular metodos de
            cilcos de vida a un componente funcional o basados en una funcion.
          </p>
          <hr className="my-4" />
          <p>
            El único metodo necesario al crear un componente basado en clases es
            el <strong>render()</strong> que es el que retorna el HTML que
            introducimos. <br />
            Los métodos más comunes son:
          </p>
          <ul>
            <li>Constructor</li>
            <li>ComponentDidMount</li>
            <li>ComponentDidUpdate</li>
            <li>ComponentWillUnmount</li>
          </ul>
        </div>
        <div className="d-flex justify-content-center">
          <img src="ciclos.png" alt="ciclos" />
        </div>
        <h3 className="text-primary">Montaje</h3>
        <p>
          Se esecuta unicamente una vez al momento en que el componente es
          creado y el flujo va como se muestra en la imagen: Primero se ejecuta
          el método Constructor --> Render --> ComponentDidMount
        </p>
        <h3 className="text-primary">Actualización</h3>
        <p>
          Se ejecuta múltiples veces y es desecadenada cuando ocurren una de
          estas tres acciones: ­New props - set­State() - force­Update(). <br />
          SU principal metodo es el ComponentDidUpdate.
        </p>
        <h3 className="text-primary">Desmontaje</h3>
        <p>
          Cuando el componente se elimina automáticamente se ejecuta
          ComponentWillUnmount
        </p>
      </div>
    );
  }
}

export default Ciclo1;
