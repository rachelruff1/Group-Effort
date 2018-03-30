import React, { Component } from "react";
import axios from "axios";

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
      </div>
    );
  }
}

export default Home;
