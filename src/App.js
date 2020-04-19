import React from "react";
import TarjetaFruta from "./components/TarjetaFruta";
import Spread from "./components/Spread";
import MouseEvents from "./components/MouseEvents/MouseEvents";
import InputEvent from "./components/InputEvent/InputEvent";
import Persistencia from "./components/PersistenciaDatos/Persistencia";
import EventosPersonalizados from "./components/EventosPersonalizados/EventosPersonalizados";
import RenderCondiciona from "./components/RenderCondicional/RenderCondiciona";
import ValidarProps from "./components/ValidadProps/ValidarProps";
import IteraccionListas from "./components/ItearccionListas/IteraccionListas";
import IteraccionObjetos from "./components/ItearccionListas/IteraccionObjetos";
import IterandoPropiedadesObj from "./components/ItearccionListas/IterandoPropiedadesObj";
import PropKeyParaIterar from "./components/ItearccionListas/PropKeyParaIterar";
import IteraccinComponentes from "./components/ItearccionListas/IteraccinComponentes";
import PasarDatosAlIterar from "./components/ItearccionListas/PasarDatosAlIterar";
import RefUno from "./components/Refs/RefUno";
import RefDos from "./components/Refs/RefDos";
import RefTres from "./components/Refs/RefTres";

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
      <EventosPersonalizados />
      <RenderCondiciona />
      <ValidarProps />
      <IteraccionListas />
      <IteraccionObjetos />
      <IterandoPropiedadesObj />
      <PropKeyParaIterar />
      <IteraccinComponentes />
      <PasarDatosAlIterar />
      <RefUno />
      <RefDos />
      <RefTres />
    </div>
  </div>
);

export default App;
