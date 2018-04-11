import React from "react";

import { connect } from "react-redux";
const { compose, withProps, lifecycle } = require("recompose");
const { withScriptjs } = require("react-google-maps");
const {
  StandaloneSearchBox
} = require("react-google-maps/lib/components/places/StandaloneSearchBox");

const CreateTripSearch = compose(
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
          // console.log(
          //   this.props,
          //   places[0].address_components[0].long_name,
          //   places[0].address_components[2].short_name,
          //   places[0].address_components[3].long_name
          // );
          const latlng = `${places[0].geometry.location.lat()},${places[0].geometry.location.lng()}`;
          if (this.props.source === "createTripContainer") {
            this.props.addDestination(
              places[0].address_components[0].long_name,
              places[0].address_components[2].short_name,
              places[0].address_components[3].long_name,
              latlng,
              places[0].place_id
            );
          } else if (this.props.source === "createTripCard") {
            this.props.updateTrip(
              places[0].address_components[0].long_name,
              places[0].address_components[2].short_name,
              places[0].address_components[3].long_name,
              latlng,
              places[0].place_id
            );
          } else if (this.props.source === "editTripContainer"){
            this.props.addEditTrip(
              places[0].address_components[0].long_name,
              places[0].address_components[2].short_name,
              places[0].address_components[3].long_name,
              latlng,
              places[0].place_id
            )}
            else {
              this.props.updateEditTrip(
                places[0].address_components[0].long_name,
                places[0].address_components[2].short_name,
                places[0].address_components[3].long_name,
                latlng,
                places[0].place_id
              );;
          }
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
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`
        }}
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

export default connect(mapStatetoProps, {})(CreateTripSearch);
