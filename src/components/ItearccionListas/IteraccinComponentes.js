import React, { Component } from "react";
import "./interCompo.css";
const images = [
  {
    author: {
      name: "Vlad Bagacian",
      avatar:
        "https://images.pexels.com/users/avatars/381880/vlad-bagacian-302.jpeg?w=256&h=256&fit=crop&crop=faces",
    },
    source:
      "https://images.pexels.com/photos/1368388/pexels-photo-1368388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400",
    views: 153,
    id: 1,
  },
  {
    author: {
      name: "Moreno Matković",
      avatar:
        "https://images.pexels.com/users/avatars/1265479/moreno-matkovic-149.jpeg?w=256&h=256&fit=crop&crop=faces",
    },
    source:
      "https://images.pexels.com/photos/2779539/pexels-photo-2779539.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400",
    views: 214,
    id: 2,
  },
  {
    author: {
      name: "Jarod Lovekamp",
      avatar:
        "https://images.pexels.com/users/avatars/1263347/jarod-lovekamp-411.jpeg?w=256&h=256&fit=crop&crop=faces",
    },
    source:
      "https://images.pexels.com/photos/2404444/pexels-photo-2404444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400",
    views: 985,
    id: 3,
  },
];

const CargaImage = (props) => {
  return (
    <div className="card">
      <img src={props.image.source} alt="Imagen" className="image" />
      <div className="footer">
        <img className="avatar" src={props.image.author.avatar} alt="avatar" />
        <div>{props.image.author.name}</div>
      </div>
    </div>
  );
};
class IteraccinComponentes extends Component {
  render() {
    return (
      <div>
        <hr />
        <h1> Iteracción de componentes</h1>

        <div className="images">
          {images.map((image) => (
            <CargaImage key={image.id} image={image} />
          ))}
        </div>
      </div>
    );
  }
}

export default IteraccinComponentes;
