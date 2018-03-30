import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
        <p>{this.state.test}</p>

        <Link to="/Auth">
          <button className="authbutton">Login</button>
        </Link>
      </div>
    );
  }
}

export default Home;
