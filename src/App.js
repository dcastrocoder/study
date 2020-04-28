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
import Input1 from "./components/ManejoFormularios/Input1";
import Input2 from "./components/ManejoFormularios/Input2";
import Input3 from "./components/ManejoFormularios/Input3";
import Form1 from "./components/ManejoFormularios/Form1";
import Form2 from "./components/ManejoFormularios/Form2";
import Form3 from "./components/ManejoFormularios/Form3";
import Ciclo1 from "./components/CicloVidaComponent/Ciclo1";
import Ciclo2 from "./components/CicloVidaComponent/Ciclo2";
import Ciclo3 from "./components/CicloVidaComponent/Ciclo3";
import Ciclo4 from "./components/CicloVidaComponent/Ciclo4";
import Ciclo5 from "./components/CicloVidaComponent/Ciclo5";
import Ciclo6 from "./components/CicloVidaComponent/Ciclo6";

const App = () => (
  <div>
    <TarjetaFruta name={"Sandia"} price={5.0} />
    <TarjetaFruta name={"Naranja"} price={1.5} />
    <TarjetaFruta name="Kiwi" price={3.3} />
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
    <Input1 />
    <Input2 />
    <Input3 />
    <Form1 />
    <Form2 />
    <Form3 />
    <Ciclo1 />
    <Ciclo2 />
    <Ciclo3 />
    <Ciclo4 />
    <Ciclo5 />
    <Ciclo6 />
  </div>
);

export default App;
