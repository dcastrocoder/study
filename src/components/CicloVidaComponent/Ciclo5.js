import React, { Component } from "react";

class UserDetails extends Component {
  state = {
    user: {},
    isFetching: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, preState) {
    if (prevProps.userId !== this.props.userId) {
      this.fetchData();
    }
  }

  fetchData = () => {
    this.setState({
      isFetching: true,
    });
    const URL =
      "https://jsonplaceholder.typicode.com/users/" + this.props.userId;
    fetch(URL)
      .then((res) => res.json())
      .then((user) => this.setState({ user, isFetching: false }));
  };
  render() {
    return (
      <div>
        <h3>User Details</h3>
        {this.state.isFetching ? (
          <h3 className="text-success">Cargando</h3>
        ) : (
          <pre>{JSON.stringify(this.state.user, null, 4)}</pre>
        )}
      </div>
    );
  }
}

class Ciclo5 extends Component {
  state = {
    id: 1,
  };

  aumentar = () => {
    this.setState((state) => ({
      id: state.id + 1,
    }));
  };

  render() {
    const { id } = this.state;
    return (
      <div>
        <hr />
        <h2 className="text-primary"> ComponenteDidUpdate</h2>
        <p>
          Es el último método que se ejecuta en la etapa de actualización. Éste
          se ejecuta cada vez que el componente se actualice, es decir, que cada
          vez que se reciban nuevas{" "}
          <strong>
            props, se llame a setState(), o al método forceUpdate()
          </strong>{" "}
          se va a desescadenar la actualización que va a desembocar en la
          llamada del úlmimo método que es el componentDidUpdate. Dentro de este
          método se puede llamar a cualquiera de los métodos de actualización
          (setState, forceUpdate).
        </p>
        <h3>ID: {id}</h3>

        <button onClick={this.aumentar}>Aumentar</button>
        <UserDetails userId={this.state.id} />
      </div>
    );
  }
}

export default Ciclo5;
