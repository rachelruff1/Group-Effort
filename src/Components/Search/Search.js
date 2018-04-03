import React, { Component } from "react";
import Geosuggest from "react-geosuggest";
import axios from "axios";
class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Search">
        <Geosuggest onSuggestSelect={sug => console.log(sug)} />

        <button> Go </button>
      </div>
    );
  }
}

export default Search;
