import React, { Component } from "react";
import Geosuggest from "react-geosuggest";

class Search extends Component {
  constructor(props) {
    super(props);
    this.searchinput = this.searchinput.bind(this);
  }

  componentDidMount() {
    //get api
  }

  searchinput(e) {
    //do stuff with input
    console.log(e);
  }

  render() {
    return (
      <div className="Search">
        <p>Search</p>
        <Geosuggest />
        <button> Go </button>
      </div>
    );
  }
}

export default Search;
