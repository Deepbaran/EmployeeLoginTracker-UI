import React, { Component } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

export class IndEmp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      JsonResponse: {},
      months: [],
      logins: []
    };
  }

  months(res) {
    let months = [];
    for (var month in res) {
      months.push(month);
    }
    return months;
  }

  logins(res) {
    let logins = [];
    for (var month in res) {
      logins.push(res[month]);
    }
    return logins;
  }

  componentDidMount() {
    axios
      .get('/allEmp')
      .then(res => {
        this.setState({ JsonResponse: res.data[this.props.empid] });
        let m = this.months(res.data[this.props.empid]);
        let l = this.logins(res.data[this.props.empid]);
        this.setState({ months: [...m] });
        this.setState({ logins: [...l] });
      })
      .catch(err => {
        console.log('error');
      });
  }

  componentDidUpdate() {
    console.log(this.state.JsonResponse);
    console.log(this.state.months);
    console.log(this.state.logins);
  }

  render() {
    return (
      <div>
        <Line
          data={{
            labels: this.state.months,
            datasets: [
              {
                label: 'Logins',
                data: [...this.state.logins],
                backgroundColor: 'red',
                borderColor: 'red'
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

export default IndEmp;
