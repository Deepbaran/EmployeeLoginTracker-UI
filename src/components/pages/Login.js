import React, { Component } from 'react';
import AdminDashboard from './AdminDashboard';
import EmployeeDashboard from './EmployeeDashboard';
import axios from 'axios';
import './Style.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empid: '',
      password: '',
      loggedIn: false,
      JsonResponse: {}
    };
  }

  getEmpId = e => {
    this.setState({ empid: e.target.value });
  };

  getPassword = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loggedIn: true });
  };

  logOut = e => {
    this.setState({ loggedIn: false });
  };

  componentDidMount() {
    axios
      .get('/empdetails')
      .then(res => {
        this.setState({ JsonResponse: res.data });
      })
      .catch(err => {
        console.log('error');
      });
  }

  render() {
    if (this.state.JsonResponse['e000'] !== undefined) {
      if (this.state.loggedIn === false) {
        return (
          <div>
            <nav>
              <h3>Employee Tracker</h3>
            </nav>
            <div className="Login">
              <form onSubmit={this.handleSubmit}>
                <label>empid</label>
                <input
                  type="text"
                  name="empid"
                  id="username"
                  onChange={this.getEmpId}
                />
                <label>Password</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  onChange={this.getPassword}
                />
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        );
      } else if (this.state.JsonResponse[this.state.empid] === undefined) {
        return <Login />;
      } else {
        if (this.state.empid === 'e000' && this.state.password === 'p000') {
          return (
            <div>
              <nav>
                <h3>Employee Tracker</h3>
                <button onClick={this.logOut}>Logout</button>
              </nav>
              <AdminDashboard empid={this.state.empid} />
            </div>
          );
        } else if (
          this.state.password ===
          this.state.JsonResponse[this.state.empid]['password']
        ) {
          return (
            <div>
              <nav>
                <h3>Employee Tracker</h3>
                <button onClick={this.logOut}>Logout</button>
              </nav>
              <EmployeeDashboard empid={this.state.empid} />
            </div>
          );
        } else {
          return <Login />;
        }
      }
    } else {
      return <h3>Loading...</h3>;
    }
  }
}
