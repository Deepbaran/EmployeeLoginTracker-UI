import React, { Component } from 'react';
import axios from 'axios';
import IndEmp from '../graphs/IndEmp';
import './Style.css';

export default class employeeDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      JsonResponse: {}
    };
  }

  componentDidMount() {
    axios
      .get('/empdetails')
      .then(res => {
        this.setState({ JsonResponse: res.data[this.props.empid] });
      })
      .catch(err => {
        console.log('error');
      });
  }
  componentDidUpdate() {
    console.log(this.state.JsonResponse);
  }

  render() {
    return (
      <div>
        <IndEmp empid={this.props.empid} />
        <table>
          <tbody>
            <tr>
              <td>EMPLOYEE ID</td>
              <td>{this.props.empid}</td>
            </tr>
            <tr>
              <td>PASSWORD</td>
              <td>{this.state.JsonResponse['password']}</td>
            </tr>
            <tr>
              <td>EMPLOYEE NAME</td>
              <td>{this.state.JsonResponse['employee_name']}</td>
            </tr>
            <tr>
              <td>EMAIL ADDRESS</td>
              <td>{this.state.JsonResponse['email']}</td>
            </tr>
            <tr>
              <td>CONTACT NUMBER</td>
              <td>{this.state.JsonResponse['contactno']}</td>
            </tr>
            <tr>
              <td>SALARY</td>
              <td>{this.state.JsonResponse['salary']}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
