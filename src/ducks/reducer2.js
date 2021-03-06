import axios from "axios";
import moment from "moment";

const GET_CITY = "GET_CITY";
const GET_DESTINATION = "GET_DESTINATION";
const GET_TRAVEL_DATES = "GET_TRAVEL_DATES";
const GET_PLACE = "GET_PLACE";
const CREATE_NEW_TRIP = "CREATE_NEW_TRIP";
const GET_USER_INFO = "GET_USER_INFO";
const UPDATE_CITY_IN_TRIP = "UPDATE_CITY_IN_TRIP";
const GET_ALL_TRIPS = "GET_ALL_TRIPS";
const DELETE_TRIP = "DELETE_TRIP";
const UPDATE_PROFILE = "UPDATE_PROFILE";
const SEND_ALL_DATA = "SEND_ALL_DATA";

const initialState = {
  info: [],
  isLoading: false,
  didErr: false,
  errMessage: "errrrrr",
  placeDetail: {},
  test: "hi",
  userinfo: {},
  newCityInTrip: {},
  index: "",
  past: [],
  current: [],
  future: [],
  allTrips: []
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
    case `${GET_USER_INFO}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_USER_INFO}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_USER_INFO}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        userinfo: action.payload
      });

    //get trip info from search bar in create trip card to replace in create trip
    case UPDATE_CITY_IN_TRIP:
      return Object.assign({}, state, {
        newCityInTrip: action.payload,
        index: action.index
      });

    case `${GET_ALL_TRIPS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_ALL_TRIPS}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_ALL_TRIPS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        allTrips: action.payload.allTrips,
        past: action.payload.past,
        current: action.payload.current,
        future: action.payload.future
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

export function getUserInfo() {
  return {
    type: GET_USER_INFO,
    payload: axios
      .get(`/api/getUserInfo`)
      .then(resp => resp.data)
      .catch(err => err.errMessage)
  };
}
export function createNewTrip(tripName, tripStart, tripEnd) {
  return {
    type: CREATE_NEW_TRIP,
    payload: axios
      .post("/api/createNewTrip", {
        tripName,
        tripStart,
        tripEnd
      })
      .then(response => {
        return response.data;
      })
      .catch(console.log)
  };
}

export function updateCityInTrip(
  cityName,
  state,
  country,
  latLng,
  placeId,
  index
) {
  return {
    type: UPDATE_CITY_IN_TRIP,
    payload: { cityName, state, country, latLng, placeId },
    index: index
  };
}

export function getAllTrips() {
  let today = moment().format("MM/DD/YYYY");
  let past = [];
  let current = [];
  let future = [];
  let allTrips = [];

  return {
    type: GET_ALL_TRIPS,
    payload: axios
      .get(`/api/getAllTrips`)
      .then(resp => {
        allTrips = resp.data;
        resp.data.map(x => {
          if (x.start_date <= today && x.end_date >= today) {
            current.push(x);
          } else if (x.end_date < today) {
            past.push(x);
          } else if (x.start_date > today) {
            future.push(x);
          } else null;
        });

        return { past, current, future, allTrips };
      })
      .catch(err => err.errMessage)
  };
}

export function updateProfile(email, username) {
  return {
    type: UPDATE_PROFILE,
    payload: axios
      .put("/api/updateProfile", { username, email })
      .then(resp => resp.data)
      .catch(err => err.errMessage)
  };
}

export function deleteTrip(tripId, index) {
  return {
    type: DELETE_TRIP,
    payload: axios
      .delete(`/api/deleteTrip/${tripId}`)
      .then(resp => index)
      .catch(err => err.errMessage)
  };
}

export function sendAllData(tripId, name, rating, photoRef) {
  return {
    type: SEND_ALL_DATA,
    payload: axios
      .post("/api/addToSaved", { tripId, name, rating, photoRef })
      .then(resp => {
        resp.data;
      })
      .catch(err => err.errMessage)
  };
}
