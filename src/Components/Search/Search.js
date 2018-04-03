// import React, { Component } from "react";
// import Geosuggest from "react-geosuggest";
// import PlacesAutocomplete from "react-places-autocomplete";
// import axios from "axios";
// class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchResult: {}
//     };
//   }

//   render() {
//     return (
//       <div className="Search">
//         <Geosuggest
//           onSuggestSelect={sug => this.setState({ searchResult: sug })}
//         />
//       </div>
//     );
//   }
// }

// export default Search;

import React, { Component } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

/* eslint-disable react/prop-types */
const renderSuggestion = ({ formattedSuggestion }) => (
  <div className="Demo__suggestion-item">
    <i className="fa fa-map-marker Demo__suggestion-icon" />
    <strong>{formattedSuggestion.mainText}</strong>{" "}
    <small className="text-muted">{formattedSuggestion.secondaryText}</small>
  </div>
);
/* eslint-enable react/prop-types */

const renderFooter = () => (
  <div className="Demo__dropdown-footer">
    <div />
  </div>
);

const cssClasses = {
  root: "form-group",
  input: "Demo__search-input",
  autocompleteContainer: "Demo__autocomplete-container"
};

const shouldFetchSuggestions = ({ value }) => value.length > 2;

const onError = (status, clearSuggestions) => {
  /* eslint-disable no-console */
  console.log(
    "Error happened while fetching suggestions from Google Maps API",
    status
  );
  /* eslint-enable no-console */
  clearSuggestions();
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      geocodeResults: null,
      loading: false
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSelect(address) {
    this.setState({
      address,
      loading: true
    });

    geocodeByAddress(address)
      .then(results => {
        console.log("Geocode Success", results[0].place_id); // eslint-disable-line no-console
        this.setState({
          geocodeResults: this.renderGeocodeSuccess(results[0].place_id),
          loading: false
        });
      })
      .catch(error => {
        console.log("Geocode Error", error); // eslint-disable-line no-console
        this.setState({
          geocodeResults: this.renderGeocodeFailure(error),
          loading: false
        });
      });
  }

  handleChange(address) {
    this.setState({
      address,
      geocodeResults: null
    });
  }

  renderGeocodeFailure(err) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Error!</strong> {err}
      </div>
    );
  }

  renderGeocodeSuccess(lat, lng) {
    return (
      <div className="alert alert-success" role="alert">
        <strong>Success!</strong> Geocoder found latitude and longitude:{" "}
        <strong>
          {lat}, {lng}
        </strong>
      </div>
    );
  }

  render() {
    const inputProps = {
      type: "text",
      value: this.state.address,
      onChange: this.handleChange,
      onBlur: () => {
        console.log("Blur event!"); // eslint-disable-line no-console
      },
      onFocus: () => {
        console.log("Focused!"); // eslint-disable-line no-console
      },
      autoFocus: true,
      placeholder: "Search Places",
      name: "Demo__input",
      id: "my-input-id"
    };

    return (
      <div>
        <PlacesAutocomplete
          renderSuggestion={renderSuggestion}
          renderFooter={renderFooter}
          inputProps={inputProps}
          classNames={cssClasses}
          onSelect={this.handleSelect}
          onEnterKeyDown={this.handleSelect}
          onError={onError}
          shouldFetchSuggestions={shouldFetchSuggestions}
        />
        {this.state.loading && (
          <div>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw Demo__spinner" />
          </div>
        )}
        {/* {this.state.geocodeResults && (
          <div className="geocoding-results">{this.state.geocodeResults}</div>
        )} */}
      </div>
    );
  }
}

export default Search;
