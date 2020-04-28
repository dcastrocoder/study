import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 0,
    isPlaying: true,
  };
  tick = null;

  play = () => {
    this.setState({ isPlaying: true });

    this.tick = setInterval(() => {
      this.setState((state) => ({
        time: state.time + 1,
      }));
    }, 1000);
  };

  pause = () => {
    this.setState({ isPlaying: false });
    clearInterval(this.tick);
  };

  toggle = () => {
    if (this.state.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  };

  componentDidMount() {
    this.play();
  }

  componentWillUnmount() {
    clearInterval(this.tick);
    this.props.onDestroy();
  }

  render() {
    const { time, isPlaying } = this.state;
    return (
      <div>
        <h1>{time}</h1>
        <button onClick={this.toggle}>{isPlaying ? "Pause" : "Play"}</button>
      </div>
    );
  }
}

class Ciclo6 extends Component {
  state = {
    mostrar: true,
    mensaje: "",
  };

  desmontar = () => {
    this.setState({ mostrar: false });
  };

  handleDestroy = () => {
    this.setState({
      mensaje: "El componente fue destruido",
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h3 className="text-primary">componentWillUnmount</h3>
        <h4>{this.state.mensaje}</h4>
        <p>
          Es el último método que se va a ejecutar en la etapa de desmontaje.
          <br />
          Aquí se pueden realizar diferentes operaciones o limpiezas antes de
          que el componente sea destruido.
        </p>
        <button onClick={this.desmontar}>Desmontar</button>
        {this.state.mostrar && <Timer onDestroy={this.handleDestroy} />}
      </div>
    );
  }
}

export default Ciclo6;
