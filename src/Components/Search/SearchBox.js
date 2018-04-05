import React from "react";
import { updatePlaceId, updateLatLng } from "../../ducks/reducer1";
import { connect } from "react-redux";
const { compose, withProps, lifecycle } = require("recompose");
const { withScriptjs } = require("react-google-maps");
const {
  StandaloneSearchBox
} = require("react-google-maps/lib/components/places/StandaloneSearchBox");

const SearchBox = compose(
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
          alert("ckicked");
          console.log(
            this.props,
            "HIIIIIII:",
            places[0].geometry.location.lat()
          );

          this.props.updatePlaceId(places[0].place_id);
          const latlng = `${places[0].geometry.location.lat()},${places[0].geometry.location.lng()}`;
          this.props.updateLatLng(latlng);
          // props.updatePlaceId(places.place_id);
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

export default connect(mapStatetoProps, { updatePlaceId, updateLatLng })(
  SearchBox
);
