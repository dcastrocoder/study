import React, { Component } from "react";

// class Http extends Component {
//   state = {
//     photos: [],
//   };

//   componentDidMount() {
//     // Solicitudes HTTP
//     fetch("http://www.omdbapi.com/?i=tt3896198&apikey=37aef52b")
//       .then((res) => res.json())
//       .then((photos) => this.setState({ photos }));
//   }

//   render() {
//     const { photos } = this.state;
//     return (
//       <div>
//         {photos.map((photo) => (
//           <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
//         ))}
//       </div>
//     );
//   }
// }

class Events extends Component {
  state = {
    width: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleChange);
  }

  handleChange = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  render() {
    return (
      <div>
        <h3>Events {this.state.width}</h3>
      </div>
    );
  }
}

class Ciclo4 extends Component {
  componentDidMount() {
    // Solicitudes HTTP
    //Agregar Event Listeners
  }

  render() {
    return (
      <div>
        <h3 className="text-primary">ComponentDidMount</h3>
        <p>
          Únicamente se va a ejecutar una única vez para cada componente de la
          fase de montaje. Se ejecuta después que se hace la actualización de
          los elementos en el DOM desencadenado por el método render. <br />
          Es un exelete sitio para hacer solicitudes HTTP. También permite
          agregar evente Listeners o escuchadores de evento dentro de la página.
        </p>
        {/* {<Http />} */}
        <Events />
      </div>
    );
  }
}

export default Ciclo4;
