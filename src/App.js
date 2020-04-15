import React from "react";
import TarjetaFruta from "./components/TarjetaFruta";

const App = () => (
  <div>
    <TarjetaFruta name={"Sandia"} price={5.0} />
    <TarjetaFruta name={"Naranja"} price={1.5} />
    <TarjetaFruta name="Kiwi" price={3.3} />
  </div>
);

export default App;
