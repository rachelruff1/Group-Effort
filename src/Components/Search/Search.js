import React, { Component } from "react";
import Geosuggest from "react-geosuggest";
import axios from "axios";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: {}
    };
  }

  render() {
    return (
      <div className="Search">
        <Geosuggest
          onSuggestSelect={sug => this.setState({ searchResult: sug })}
        />

        <button onClick={console.log(this.state.searchResult)} />
      </div>
    );
  }
}

export default Search;
