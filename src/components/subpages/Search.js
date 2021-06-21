import React, { Component } from 'react';
import axios from 'axios';
import EmployeeDashboard from '../pages/EmployeeDashboard';
import '../pages/Style.css';

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: [],
      JsonResponse: {},
      searchTerm: '',
      props: '',
      empdetails: false
    };
  }

  back = e => {
    this.setState({ props: '', empdetails: false, searchTerm: '' });
  };

  objToArr = obj => {
    let res = [];
    for (var key in obj) {
      console.log(key);
      res.push(key);
    }
    return res;
  };

  componentDidMount() {
    axios
      .get('/empdetails')
      .then(res => {
        this.setState({ JsonResponse: res.data });
        let responseId = this.objToArr(res.data);
        this.setState({ id: [...responseId] });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    console.log(this.state.id);
  }

  render() {
    if (this.state.empdetails === false) {
      return (
        <div>
          <input
            type="text"
            placeholder="Search..."
            name=""
            id=""
            onChange={e => {
              this.setState({ searchTerm: e.target.value });
            }}
          />
          {this.state.id
            .filter(val => {
              if (this.state.searchTerm === '') return val;
              else if (
                this.state.JsonResponse[val]['employee_name']
                  .toLowerCase()
                  .includes(this.state.searchTerm.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .map(val => {
              if (val !== 'e000')
                return (
                  <div
                    key={val}
                    onClick={e =>
                      this.setState({ props: val, empdetails: true })
                    }
                  >
                    <p>{this.state.JsonResponse[val]['employee_name']}</p>
                  </div>
                );
            })}
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.back}>Back</button>
          <EmployeeDashboard empid={this.state.props} />
        </div>
      );
    }
  }
}

export default Search;
