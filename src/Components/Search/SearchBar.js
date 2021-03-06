import React from "react";
import { connect } from "react-redux";
const { compose, withProps, lifecycle } = require("recompose");
const { withScriptjs } = require("react-google-maps");
const {
  StandaloneSearchBox
} = require("react-google-maps/lib/components/places/StandaloneSearchBox");

const SearchBox= compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        places: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();

          this.setState({
            places
          });
          console.log(
            places[0].address_components[0].long_name,
            places[0].address_components[2].short_name,
            places[0].address_components[3].long_name
          );

          this.props.updatePlaceId(places[0].place_id);

  
          const latlng = `${places[0].geometry.location.lat()},${places[0].geometry.location.lng()}`;

          this.props.updateLatLng(latlng);

          this.props.updateLocationData(
            places[0].address_components[0].long_name,
            places[0].address_components[2].short_name,
            places[0].address_components[3].long_name
          );
          // props.updatePlaceId(places.place_id);

          this.props.updatePlacephotoref(places[0].place_id);
        //potential search box formating
        }
      });
    }
  }),
  withScriptjs
)(goog => (
  <div
    data-standalone-searchbox=""
    // onclick={console.log(props)}
  >
    <StandaloneSearchBox
      ref={goog.onSearchBoxMounted}
      bounds={goog.bounds}
      onPlacesChanged={goog.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Where do you want to go?"
        className="search-input"
      />
    </StandaloneSearchBox>
    {goog.places.map(
      ({ place_id, formatted_address, geometry: { location } }) => (
        <p key={place_id}>
          {/* {
            // this.props.updateLatLng(`${location.lat()},${location.lng()}`)
            console.log(location.lat())} {console.log(location.lng())
            }{console.log(this)
            } */}
        </p>
      )
    )}
  </div>
));

const mapStatetoProps = state => state;

export default connect(mapStatetoProps)(SearchBox);
