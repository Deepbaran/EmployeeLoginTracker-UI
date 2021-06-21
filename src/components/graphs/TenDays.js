import React, { Component } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

export class TenDays extends Component {
  constructor(props) {
    super(props);

    this.state = {
      JsonResponse: {},
      labelx: [],
      logins: []
    };
  }

  labels(res) {
    let labels = [];
    for (var date in res) {
      labels.push(date);
    }
    return labels;
  }

  logins(res) {
    let logins = [];
    for (var date in res) {
      logins.push(res[date]['logins']);
    }
    return logins;
  }

  componentDidMount() {
    axios
      .get('/lastTen')
      .then(res => {
        this.setState({ JsonResponse: res.data });
        let x = this.labels(res.data);
        this.setState({ labelx: [...x] });
        let l = this.logins(res.data);
        this.setState({ logins: [...l] });
      })
      .catch(err => {
        console.log('error');
      });
  }
  componentDidUpdate() {
    // console.log(this.state.JsonResponse);
    // console.log(this.state.labelx);
    // console.log(this.state.logins);
  }

  render() {
    return (
      <div>
        <Bar
          data={{
            labels: this.state.labelx,
            datasets: [
              {
                label: 'Logins',
                data: [...this.state.logins],
                backgroundColor: 'blue',
                borderColor: 'blue'
              }
            ]
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}

export default TenDays;
