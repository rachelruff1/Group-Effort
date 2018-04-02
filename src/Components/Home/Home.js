import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      test: ""
    };
  }

  componentDidMount() {
    axios.get(`/api/test`).then(results => {
      this.setState({
        test: results.data
      });
    });
  }

  render() {
    return (
      <div className="Home">
        <Search />
        <p>{this.state.test}</p>
        <Link to="/Auth">
          <button className="authbutton">Login</button>
        </Link>
      </div>
    );
  }
}

export default Home;
