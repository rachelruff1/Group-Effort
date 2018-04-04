import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import "./Home.css";
class Home extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div className="Home">
        <div className="homesearch">
          <Search />
        </div>
      </div>
    );
  }
}

export default Home;
