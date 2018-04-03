import axios from "axios";
const GET_PROFILE = "GET_PROFILE";
const UPDATE_PLACE_ID = "UPDATE_PLACE_ID";

const initialState = {
  image: "",
  isLoading: false,
  didErr: false,
  errMessage: "errrrrr",
  placeId: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `$ {GET_PROFILE}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `$ {GET_PROFILE}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        image: action.payload
      });
    case `$ {GET_PROFILE}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });

    case UPDATE_PLACE_ID:
      return Object.assign({}, state, { placeId: action.payload });

    default:
      return state;
  }
}

export function getProfile() {
  return {
    type: GET_PROFILE,
    payload: axios
      .request({ url: `/api/getProfile` })
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
