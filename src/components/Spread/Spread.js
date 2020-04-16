import React from "react";

const Gato = (props) => (
  <div>
    <h1>Spread: agregar un objeto a otro</h1>
    <pre>{JSON.stringify(props, null, 4)}</pre>
    <p> JSON.stringify se usa para renderizar objetos des Javascript</p>
  </div>
);

class Spread extends React.Component {
  render() {
    const OtrosGatos = {
      Raza: "Americana",
      Tamaño: "promedio",
    };

    return (
      <div>
        <Gato name="Garfield" edad="4 años" {...OtrosGatos} />
        {/* ... permite añadir OtrosGatos a Gatos */}
      </div>
    );
  }
}

export default Spread;
