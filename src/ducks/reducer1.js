import axios from "axios";
const GETINFO2 = "GETINFO2";

export function Getinfo2() {
  return {
    type: GETINFO2,
    payload: axios
      .request({ url: `/api/theEndPointForInfo2` })
      .then(response => response.data)
      .catch(err => err.errMessage)
  };
}

const initialState = {
  info2: [],
  isLoading: false,
  didErr: false,
  errMessage: "errrrrr"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GETINFO2}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GETINFO2}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        info2: action.payload
      });
    case `${GETINFO2}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    default:
      return state;
  }
}
