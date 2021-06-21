import React, { Component } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

export class AllEmp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      JsonResponse: {},
      months: [],
      updated: false
      // logins: []
    };
  }

  months(res) {
    let months = [];
    for (var month in res) {
      months.push(month);
    }
    return months;
  }

  // login(res) {
  //   function logins(res) {
  //     let logins = [];
  //     for (var month in res) {
  //       logins.push(res[month]);
  //     }
  //     console.log('Yo: ' + logins);
  //     return logins;
  //   }
  //   let login = [];
  //   for (var r in res.data) {
  //     let l = logins(res.data[r]);
  //     login.push([...l]);
  //   }
  //   return login;
  // }

  componentDidMount() {
    axios
      .get('/allEmp')
      .then(res => {
        this.setState({ JsonResponse: res.data });
        let m = this.months(res.data['e001']);
        this.setState({ months: [...m] });
        // let login = this.login(res.data);
        // this.setState({ logins: [...login] });
      })
      .catch(err => {
        console.log('error');
      });
  }

  componentDidUpdate() {
    console.log(this.state.JsonResponse['e005']['JAN']);
  }

  render() {
    if (this.state.JsonResponse['e001'] !== undefined) {
      return (
        <div>
          <Line
            data={{
              labels: this.state.months,
              datasets: [
                {
                  label: 'e001',
                  data: [
                    this.state.JsonResponse['e001']['JAN'],
                    this.state.JsonResponse['e001']['FEB'],
                    this.state.JsonResponse['e001']['MAR'],
                    this.state.JsonResponse['e001']['APR'],
                    this.state.JsonResponse['e001']['MAY'],
                    this.state.JsonResponse['e001']['JUN']
                  ],
                  backgroundColor: 'red',
                  borderColor: 'red'
                },
                {
                  label: 'e002',
                  data: [
                    this.state.JsonResponse['e002']['JAN'],
                    this.state.JsonResponse['e002']['FEB'],
                    this.state.JsonResponse['e002']['MAR'],
                    this.state.JsonResponse['e002']['APR'],
                    this.state.JsonResponse['e002']['MAY'],
                    this.state.JsonResponse['e002']['JUN']
                  ],
                  backgroundColor: 'blue',
                  borderColor: 'blue'
                },
                {
                  label: 'e003',
                  data: [
                    this.state.JsonResponse['e003']['JAN'],
                    this.state.JsonResponse['e003']['FEB'],
                    this.state.JsonResponse['e003']['MAR'],
                    this.state.JsonResponse['e003']['APR'],
                    this.state.JsonResponse['e003']['MAY'],
                    this.state.JsonResponse['e003']['JUN']
                  ],
                  backgroundColor: 'yellow',
                  borderColor: 'yellow'
                },
                {
                  label: 'e004',
                  data: [
                    this.state.JsonResponse['e004']['JAN'],
                    this.state.JsonResponse['e004']['FEB'],
                    this.state.JsonResponse['e004']['MAR'],
                    this.state.JsonResponse['e004']['APR'],
                    this.state.JsonResponse['e004']['MAY'],
                    this.state.JsonResponse['e004']['JUN']
                  ],
                  backgroundColor: 'green',
                  borderColor: 'green'
                },
                {
                  label: 'e005',
                  data: [
                    this.state.JsonResponse['e005']['JAN'],
                    this.state.JsonResponse['e005']['FEB'],
                    this.state.JsonResponse['e005']['MAR'],
                    this.state.JsonResponse['e005']['APR'],
                    this.state.JsonResponse['e005']['MAY'],
                    this.state.JsonResponse['e005']['JUN']
                  ],
                  backgroundColor: 'orange',
                  borderColor: 'orange'
                },
                {
                  label: 'e006',
                  data: [
                    this.state.JsonResponse['e006']['JAN'],
                    this.state.JsonResponse['e006']['FEB'],
                    this.state.JsonResponse['e006']['MAR'],
                    this.state.JsonResponse['e006']['APR'],
                    this.state.JsonResponse['e006']['MAY'],
                    this.state.JsonResponse['e006']['JUN']
                  ],
                  backgroundColor: 'purple',
                  borderColor: 'purple'
                },
                {
                  label: 'e007',
                  data: [
                    this.state.JsonResponse['e007']['JAN'],
                    this.state.JsonResponse['e007']['FEB'],
                    this.state.JsonResponse['e007']['MAR'],
                    this.state.JsonResponse['e007']['APR'],
                    this.state.JsonResponse['e007']['MAY'],
                    this.state.JsonResponse['e007']['JUN']
                  ],
                  backgroundColor: 'black',
                  borderColor: 'black'
                },
                {
                  label: 'e008',
                  data: [
                    this.state.JsonResponse['e008']['JAN'],
                    this.state.JsonResponse['e008']['FEB'],
                    this.state.JsonResponse['e008']['MAR'],
                    this.state.JsonResponse['e008']['APR'],
                    this.state.JsonResponse['e008']['MAY'],
                    this.state.JsonResponse['e008']['JUN']
                  ],
                  backgroundColor: 'aqua',
                  borderColor: 'aqua'
                },
                {
                  label: 'e009',
                  data: [
                    this.state.JsonResponse['e009']['JAN'],
                    this.state.JsonResponse['e009']['FEB'],
                    this.state.JsonResponse['e009']['MAR'],
                    this.state.JsonResponse['e009']['APR'],
                    this.state.JsonResponse['e009']['MAY'],
                    this.state.JsonResponse['e009']['JUN']
                  ],
                  backgroundColor: 'maroon',
                  borderColor: 'maroon'
                },
                {
                  label: 'e010',
                  data: [
                    this.state.JsonResponse['e010']['JAN'],
                    this.state.JsonResponse['e010']['FEB'],
                    this.state.JsonResponse['e010']['MAR'],
                    this.state.JsonResponse['e010']['APR'],
                    this.state.JsonResponse['e010']['MAY'],
                    this.state.JsonResponse['e010']['JUN']
                  ],
                  backgroundColor: 'lime',
                  borderColor: 'lime'
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
    } else {
      return <h3>Loading...</h3>;
    }
  }
}

export default AllEmp;
