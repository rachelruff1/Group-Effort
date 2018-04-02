import axios from "axios";
const GETINFO = "GETINFO";

export function Getinfo() {
  return {
    type: GETINFO,
    payload: axios
      .request({ url: `/api/theEndPointForInfo` })
      .then(response => response.data)
      .catch(err => err.errMessage)
  };
}

const initialState = {
  info: [],
  isLoading: false,
  didErr: false,
  errMessage: "errrrrr"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GETINFO}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GETINFO}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        info: action.payload
      });
    case `${GETINFO}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    default:
      return state;
  }
}
