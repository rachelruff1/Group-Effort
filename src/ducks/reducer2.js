import axios from "axios";
const GET_CITY = "GET_CITY";
const GET_DESTINATION = "GET_DESTINATION";
const GET_TRAVEL_DATES = "GET_TRAVEL_DATES";
const GET_PLACE = "GET_PLACE";
const CREATE_NEW_TRIP = "CREATE_NEW_TRIP";

const initialState = {
  info: [],
  isLoading: false,
  didErr: false,
  errMessage: "errrrrr",
  placeDetail: {},
  test: 'hi'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    //City
    case `${GET_CITY}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_CITY}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_CITY}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        city: action.payload
      });
    //Destination
    case `${GET_DESTINATION}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_DESTINATION}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_DESTINATION}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        destination: action.payload
      });
    //Travel Dates
    case `${GET_TRAVEL_DATES}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_TRAVEL_DATES}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_TRAVEL_DATES}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        travelDates: action.payload
      });

    //Get place for TripView.js
    case `${GET_PLACE}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_PLACE}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_PLACE}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        placeDetail: action.payload.result
      });
      
    //default value
    default:
      return state;
  }
}
export function getCity() {
  return {
    type: GET_CITY,
    payload: axios
      .request({ url: `/api/theEndPointForCity` })
      .then(response => response.data)
      .catch(err => err.errMessage)
  };
}
export function getDestination() {
  return {
    type: GET_DESTINATION,
    payload: axios
      .request({ url: `/api/theEndPointForDestination` })
      .then(response => response.data)
      .catch(err => err.errMessage)
  };
}
export function getTravelDates() {
  return {
    type: GET_TRAVEL_DATES,
    payload: axios
      .request({ url: `/api/theEndPointForTravelDates` })
      .then(response => response.data)
      .catch(err => err.errMessage)
  };
}
export function getPlace(placeId) {
  return {
    type: GET_PLACE,
    payload: axios
      .get(`/api/getPlaceDetail/${placeId}`)
      .then(resp => resp.data)
      .catch(err => err.errMessage)
  };
}
export function createNewTrip(tripName, tripStart, tripEnd){
  return {
    type: CREATE_NEW_TRIP,
    payload: axios
      .post('/api/createNewTrip', {
        tripName, tripStart, tripEnd
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(console.log)
  };
}
