import React, { Component } from "react";
import axios from "axios";
import "./Table.css";

class Table extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    search: "",
  };
  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    axios
      .get("https://randomuser.me/api/?results=25")
      .then((response) => {
        // console.log(response.data.results);
        // console.log(response.data.results.name.first);
        // console.log(response.data.results);
        this.setState({
          employees: response.data.results,
          filteredEmployees: response.data.results,
        });
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    const filteredEmployees = this.state.employees.filter((employee) => {
      return employee.name.last.includes(value);
    });

    this.setState({
      [name]: value,
      filteredEmployees: filteredEmployees,
    });
  };

  handleButtonClick = () => {
    // console.log("clicked button");
    const sortedEmployees = this.state.filteredEmployees.sort((a, b) => {
      return a.nat < b.nat ? -1 : 1;
    });
    // console.log(sortedEmployees);
    this.setState({
      employees: sortedEmployees,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <input
              value={this.state.search}
              name="search"
              onChange={this.handleInputChange}
              type="text"
              placeholder="search names"
            />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <h2>Image</h2>
                  </th>
                  <th scope="col">
                    <h2>First Name</h2>
                  </th>
                  <th scope="col">
                    <h2>Last Name</h2>
                  </th>
                  <th scope="col">
                    <h2>Email</h2>
                  </th>
                  <th scope="col">
                    <h2>Age</h2>
                  </th>
                  <th scope="col">
                    <h2>Gender</h2>
                  </th>
                  <th scope="col">
                    <h2>
                      Country
                      <button onClick={this.handleButtonClick}>
                        <i className="fas fa-caret-down"></i>
                      </button>
                    </h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.filteredEmployees.map((results) => {
                  return (
                    <tr>
                      <th scope="row">
                        <img
                          src={results.picture.thumbnail}
                          className="img-fluid"
                          alt="thumbnail"
                        />
                      </th>
                      <td key={results.login.uuid}>{results.name.first}</td>
                      <td>{results.name.last}</td>
                      <td>
                        <a href="mailto::{results.name.email}">
                          {results.email}
                        </a>
                      </td>
                      <td>{results.dob.age}</td>
                      <td>{results.gender}</td>
                      <td>{results.nat}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
