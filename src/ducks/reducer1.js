import axios from "axios";
const GET_PROFILE = "GET_PROFILE";
const UPDATE_PLACE_ID = "UPDATE_PLACE_ID";
const GET_CITIES = "GET_CITIES";

const initialState = {
  picture: "",
  isLoading: false,
  didErr: false,
  errMessage: "errrrrr",
  placeId: "",
  cities: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_PROFILE}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GET_PROFILE}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        picture: action.payload
      });
    case `${GET_PROFILE}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });

    case UPDATE_PLACE_ID:
      return Object.assign({}, state, { placeId: action.payload });

    case `${GET_CITIES}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_CITIES}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_CITIES}_FULFILLED`:
      // console.log("reducer func:", action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        cities: action.payload
      });

    default:
      return state;
  }
}

export function getProfile() {
  return {
    type: GET_PROFILE,
    payload: axios
      .get(`/api/getProfile`)
      .then(response => response.data)
      .catch(err => err.errMessage)
  };
}

export function updatePlaceId(placeId) {
  console.log(placeId);
  return {
    type: UPDATE_PLACE_ID,
    payload: placeId
  };
}

export function getCities(tripId) {
  // console.log("hit:", tripId);
  return {
    type: GET_CITIES,
    payload: axios
      .get(`/api/getCities/${tripId}`)
      .then(response => {
        // console.log(response.data);
        return response.data;
      })
      .catch(err => err.errMessage)
  };
}
