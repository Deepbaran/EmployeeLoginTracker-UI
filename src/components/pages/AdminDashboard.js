import React, { Component } from 'react';
// import axios from 'axios';
import Search from '../subpages/Search';
import TenDays from '../graphs/TenDays';
import AllEmp from '../graphs/AllEmp';
import './Style.css';

export default class adminDashboard extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     JsonResponse: {}
  //   };
  // }

  // componentDidMount() {
  //   axios
  //     .get('/hello')
  //     .then(res => {
  //       this.setState({ JsonResponse: res.data });
  //     })
  //     .catch(err => {
  //       console.log('error');
  //     });
  // }

  render() {
    return (
      <div>
        <AllEmp />
        <TenDays />
        <Search />
      </div>
    );
  }
}
