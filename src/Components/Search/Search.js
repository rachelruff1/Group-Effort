import React, { Component } from "react";

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
        <input onChange={e => this.searchinput(e)} />
        <button> Go </button>
      </div>
    );
  }
}

export default Search;
