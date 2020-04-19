import React, { Component } from "react";
import Chart from "chart.js";
import "./ref.css";

class Graficas extends Component {
  grafica = React.createRef();

  componentDidMount() {
    const ctx = this.grafica.current.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  render() {
    return (
      <div>
        <h3> Graficas Chart.js</h3>
        <p> npm install chart.js</p>
        <div className="grafico">
          <canvas ref={this.grafica} width="200" height="200"></canvas>
        </div>
      </div>
    );
  }
}

class RefDos extends Component {
  render() {
    return (
      <div>
        <hr />
        <h1> Integrar librerías de terceros usando Refs</h1>
        <Graficas />
      </div>
    );
  }
}

export default RefDos;
