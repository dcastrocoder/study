import React from "react";
import TarjetaFruta from "./components/TarjetaFruta";
import Spread from "./components/Spread";
import MouseEvents from "./components/MouseEvents/MouseEvents";
import InputEvent from "./components/InputEvent/InputEvent";
import Persistencia from "./components/PersistenciaDatos/Persistencia";

const App = () => (
  <div>
    <TarjetaFruta name={"Sandia"} price={5.0} />
    <TarjetaFruta name={"Naranja"} price={1.5} />
    <TarjetaFruta name="Kiwi" price={3.3} />

    <div>
      <h1>Otros ejercicios</h1>
      <Spread />
      <MouseEvents />
      <InputEvent />
      <Persistencia />
    </div>
  </div>
);

export default App;
