import React, { Component } from "react";

class Navber extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar <span className="badge bg-secondary"> 4</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navber;
