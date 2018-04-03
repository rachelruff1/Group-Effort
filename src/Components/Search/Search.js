import React, { Component } from "react";
import Geosuggest from "react-geosuggest";

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <p>Search</p>
        <Geosuggest onSuggestSelect={sug => console.log(sug)} />

        <button> Go </button>
      </div>
    );
  }
}

export default Search;
