import axios from "axios";
import moment from "moment";

const GET_USER = "GET_USER";
const EDIT_USER = "EDIT_USER";
const LOGOUT = "LOGOUT";
const GET_PROFILE = "GET_PROFILE";

const UPDATE_PLACE_ID = "UPDATE_PLACE_ID";
const UPDATE_LAT_LNG = "UPDATE_LAT_LNG";
const GET_CITIES = "GET_CITIES";
const GET_TRIP = "GET_TRIP";
const GET_CITY_DETAIL = "GET_CITY_DETAIL";

const GET_SAVED = "GET_SAVED";
const GET_FOOD = "GET_FOOD";
const GET_THINGS_TO_DO = "GET_THINGS_TO_DO";
const GET_MUSEUMS = "GET_MUSEUMS";
const GET_WEBCAMS = "GET_WEBCAMS";
const GET_FACTS = "GET_FACTS";
const UPDATE_LOCATION_DATA = "UPDATE_LOCATION_DATA";
const GET_PARKS = "GET_PARKS";

//CREATETRIP.JS
const GET_CITIES_IN_TRIP = "GET_CITIES_IN TRIP";
const ADD_CITY_TO_TRIP = "ADD_CITY_TO_TRIP";
const UPDATE_TRIP_NAME = "UPDATE_TRIP_NAME";
const UPDATE_CITIES_IN_TRIP = "UPDATE_CITIES_IN_TRIP";
const ADD_DATES_TO_CITIES = "ADD_DATES_TO_CITIES";

const ADD_CITY_TO_DATABASE = "ADD_CITY_TO_DATABASE";
const CREATE_NEW_TRIP = "CREATE_NEW_TRIP";
const UPDATE_START_DATE = "UPDATE_START_DATE";
const UPDATE_END_DATE = "UPDATE_END_DATE";

const GET_MALL = "GET_MALL";
const GET_MOVIE = "GET_MOVIE";
const initialState = {
  user: {},
  image: "",
  picture: "",
  isLoading: false,
  didErr: false,
  errMessage: "errrrrr",
  placeId: "",
  latlng: "",
  cities: {},
  cityId: "",
  trip: {},
  saved: {},
  food: [],
  thingsToDo: {},
  museums: [],
  webcams: {},
  facts: {},
  parks: [],
  mall: [],
  movie: [],

  city: "",
  state: "",
  country: "",
  //CREATETRIP.JS
  citiesInTrip: [],
  tripName: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_USER}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${GET_USER}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      });

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

    case UPDATE_LAT_LNG:
      // console.log("updatellng:", action.payload);
      return Object.assign({}, state, { latlng: action.payload });

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
    case `${GET_TRIP}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_TRIP}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_TRIP}_FULFILLED`:
      // console.log("reducer func:", action.payload[0]);
      return Object.assign({}, state, {
        isLoading: false,
        trip: action.payload[0]
      });

    case `${GET_SAVED}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_SAVED}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });

    case `${GET_CITY_DETAIL}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_CITY_DETAIL}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_CITY_DETAIL}_FULFILLED`:
      console.log("reducer func:", action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        cityId: action.payload
      });

    //TRIP CALLS FROM DB AND APIS

    case `${GET_PARKS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_PARKS}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_PARKS}_FULFILLED`:
      // console.log("reducer parks", action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        parks: action.payload
      });
    case `${GET_SAVED}_FULFILLED`:
      // console.log("reducer func:", action.payload[0]);
      return Object.assign({}, state, {
        isLoading: false,
        saved: action.payload[0]
      });
    case `${GET_FOOD}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_FOOD}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_FOOD}_FULFILLED`:
      // console.log("reducer func:", action.payload[0]);
      return Object.assign({}, state, {
        isLoading: false,
        food: action.payload
      });
    case `${GET_THINGS_TO_DO}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_THINGS_TO_DO}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_THINGS_TO_DO}_FULFILLED`:
      // console.log("reducer func:", action.payload[0]);
      return Object.assign({}, state, {
        isLoading: false,
        thingsToDo: action.payload
      });
    case `${GET_MUSEUMS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_MUSEUMS}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_MUSEUMS}_FULFILLED`:
      console.log("reducer func:", action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        museums: action.payload
      });
    case `${GET_WEBCAMS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_WEBCAMS}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_WEBCAMS}_FULFILLED`:
      // console.log("reducer func:", action.payload[0]);
      return Object.assign({}, state, {
        isLoading: false,
        webcams: action.payload[0]
      });
    case `${GET_FACTS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_FACTS}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_FACTS}_FULFILLED`:
      // console.log("reducer func:", action.payload[0]);
      return Object.assign({}, state, {
        isLoading: false,
        facts: action.payload[0]
      });

    case UPDATE_LOCATION_DATA:
      // console.log(action, initialState);
      return Object.assign({}, state, {
        city: action.payload,
        state: action.data,
        country: action.moreData
      });
    case `${GET_MALL}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_MALL}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_MALL}_FULFILLED`:
      // console.log("reducer func:", action.payload[0]);
      return Object.assign({}, state, {
        isLoading: false,
        mall: action.payload
      });
    case `${GET_MOVIE}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_MOVIE}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
    case `${GET_MOVIE}_FULFILLED`:
      // console.log("reducer func:", action.payload[0]);
      return Object.assign({}, state, {
        isLoading: false,
        movie: action.payload
      });

    //CREATETRIP.JS

    case GET_CITIES_IN_TRIP:
      console.log(action);
      return Object.assign({}, state, {
        citiesInTrip: [
          {
            cityName: state.city,
            state: state.state,
            country: state.country,
            latLng: state.latlng,
            placeId: state.placeId
          }
        ],
        // [...state.citiesInTrip, action.payload],
        //, startDate:'', endDate: ''
        tripName: action.payload.cityName
      });

    case ADD_CITY_TO_TRIP:
      console.log(state, action.payload);
      return Object.assign({}, state, {
        citiesInTrip: [...state.citiesInTrip, action.payload]
      });

    case UPDATE_CITIES_IN_TRIP:
      console.log(
        state.citiesInTrip,
        "index",
        action.index,
        "resp",
        action.payload
      );
      let newArr = state.citiesInTrip.slice();
      newArr.splice(action.index, 1, action.payload);
      console.log(newArr);
      return Object.assign({}, state, {
        citiesInTrip: newArr
        // state.citiesInTrip.splice(action.index, 1, action.payload)
      });

    case UPDATE_TRIP_NAME:
      return Object.assign({}, state, { tripName: action.payload });

    case ADD_DATES_TO_CITIES:
      // console.log(action.payload);
      let updateCityArr = state.citiesInTrip.slice();
      updateCityArr[action.payload.index].startDate = action.payload.startDate;
      updateCityArr[action.payload.index].endDate = action.payload.endDate;
      console.log(updateCityArr);
      return Object.assign({}, state, {
        citiesInTrip: updateCityArr
      });
    case UPDATE_START_DATE:
      let updateCityStart = state.citiesInTrip.slice();
      updateCityStart[action.payload.index].startDate =
        action.payload.startDate;
      console.log(updateCityStart);
      return Object.assign({}, state, { citiesInTrip: updateCityStart });
    case UPDATE_END_DATE:
      console.log(action.payload.index, action.payload.endDate);
      let updateCityEnd = state.citiesInTrip.slice();
      updateCityEnd[action.payload.index].endDate = action.payload.endDate;
      console.log(updateCityEnd);
      return Object.assign({}, state, { citiesInTrip: updateCityEnd });

    default:
      return state;
  }
}

//FUNCTIONS

export function getUser() {
  return {
    type: GET_USER,
    payload: axios
      .get("/api/getUser")
      .then(resp => {
        // console.log('getUser reducer:', resp.data);
        return resp.data[0];
      })
      .catch(console.log)
  };
}

export function editUser(name, email, picture) {
  console.log("hit edit", name, email, picture);
  //eventid, name, date, time, location, description
  return {
    type: EDIT_USER,
    payload: axios
      .put("/api/editUser/", { name, email, picture })
      .then(resp => resp.data)
      .catch(console.log)
  };
}

export function logout() {
  return {
    type: LOGOUT,
    payload: axios
      .get("/api/logout")
      .then(resp => resp.data)
      .catch(console.log)
  };
}

export function getProfile() {
  return {
    type: GET_PROFILE,
    payload: axios
      .get(`/api/getProfile`)
      .then(response => response.data[0].picture)
      .catch(err => err.errMessage)
  };
}

export function updatePlaceId(placeId) {
  // console.log(placeId);
  return {
    type: UPDATE_PLACE_ID,
    payload: placeId
  };
}

export function updateLatLng(latlng) {
  // console.log(latlng);
  return {
    type: UPDATE_LAT_LNG,
    payload: latlng
  };
}

export function getCities(tripId) {
  // console.log("hit:", tripId);
  return {
    type: GET_CITIES,
    payload: axios
      .get(`/api/getCities/${tripId}`)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => err.errMessage)
  };
}

export function getTrip(tripId) {
  console.log("hit:", tripId);
  return {
    type: GET_TRIP,
    payload: axios
      .get(`/api/getTrip/${tripId}`)
      .then(response => {
        // console.log(response.data);
        return response.data;
      })
      .catch(err => err.errMessage)
  };
}

export function getCityDetail(cityId) {
  console.log("hit:", cityId);
  return {
    type: GET_CITY_DETAIL,
    payload: axios
      .get(`/api/getCityDetail/${cityId}`)
      .then(resp => {
        console.log(resp.data);
        return resp.data;
      })
      .catch(err => err.errMessage)
  };
}

//TRIP DETAIL CALLS (DB AND API CALLS)

export function getSaved(tripId) {
  console.log("hit:", tripId);
  return {
    type: GET_SAVED,
    payload: axios
      .get(`/api/get/${tripId}`)
      .then(resp => {
        console.log(resp.data);
        return resp.data;
      })
      .catch(err => err.errMessage)
  };
}
export function getFood(latlng) {
  return {
    type: GET_FOOD,
    payload: axios
      .get(`/api/getFood/${latlng}`)
      .then(resp => {
        console.log(resp.data.results, "foooooooodssssss");
        return resp.data.results;
      })
      .catch(err => err.errMessage)
  };
}
export function getThingsToDo(tripId) {
  console.log("hit:", tripId);
  return {
    type: GET_THINGS_TO_DO,
    payload: axios
      .get(`/api/get/${tripId}`)
      .then(resp => {
        console.log(resp.data);
        return resp.data;
      })
      .catch(err => err.errMessage)
  };
}
export function getMuseums(latlng) {
  return {
    type: GET_MUSEUMS,
    payload: axios
      .get(`/api/getMuseums/${latlng}`)
      .then(resp => {
        return resp.data.results;
      })
      .catch(err => err.errMessage)
  };
}
export function getWebcams(tripId) {
  console.log("hit:", tripId);
  return {
    type: GET_WEBCAMS,
    payload: axios
      .get(`/api/get/${tripId}`)
      .then(resp => {
        console.log(resp.data);
        return resp.data;
      })
      .catch(err => err.errMessage)
  };
}
export function getFacts(tripId) {
  console.log("hit:", tripId);
  return {
    type: GET_FACTS,
    payload: axios
      .get(`/api/get/${tripId}`)
      .then(resp => {
        console.log(resp.data);
        return resp.data;
      })
      .catch(err => err.errMessage)
  };
}

export function getMall(latlng) {
  return {
    type: GET_MALL,
    payload: axios
      .get(`/api/getMall/${latlng}`)
      .then(resp => {
        console.log(resp.data.results, "Malllllllls");
        return resp.data.results;
      })
      .catch(err => err.errMessage)
  };
}
export function getMovie(latlng) {
  return {
    type: GET_MOVIE,
    payload: axios
      .get(`/api/getMovie/${latlng}`)
      .then(resp => {
        console.log(resp.data.results, "Moviessssssss");
        return resp.data.results;
      })
      .catch(err => err.errMessage)
  };
}

export function updateLocationData(city, state, country) {
  // console.log("hit:", city, state, country);
  return {
    type: UPDATE_LOCATION_DATA,
    payload: city,
    data: state,
    moreData: country
  };
}
export function getParks(latlng) {
  console.log("hit:", latlng);
  return {
    type: GET_PARKS,
    payload: axios
      .get(`/api/getParks/${latlng}`)
      .then(resp => {
        console.log(resp.data.results);
        return resp.data.results;
      })
      .catch(err => err.errMessage)
  };
}

//CREATETRIP.JS

export function getCitiesInTrip(cityName, state, country, latLng, placeId) {
  console.log(cityName, state, country, latLng, placeId);
  return {
    type: GET_CITIES_IN_TRIP,
    payload: { cityName, state, country, latLng, placeId }
  };
}

export function addCityToTrip(cityName, state, country, latLng, placeId) {
  console.log(cityName, state, country, latLng, placeId);
  return {
    type: ADD_CITY_TO_TRIP,
    payload: {
      cityName,
      state,
      country,
      latLng,
      placeId
    }
  };
}

export function updateTripName(tripName) {
  return {
    type: UPDATE_TRIP_NAME,
    payload: tripName
  };
}

export function updateCitiesInTrip(
  cityName,
  state,
  country,
  latLng,
  placeId,
  index
) {
  return {
    type: UPDATE_CITIES_IN_TRIP,
    payload: { cityName, state, country, latLng, placeId },
    index: index
  };
}

export function addDatesToCities(startMUI, endMUI, index) {
  let s = startMUI.toString();
  let e = endMUI.toString();
  let startDate = moment(s).format("MM/DD/YYYY");
  let endDate = moment(e).format("MM/DD/YYYY");
  console.log(startDate, endDate, index);
  return {
    type: ADD_DATES_TO_CITIES,
    payload: { startDate, endDate, index }
  };
}

export function createNewTrip(tripName, cities) {
  console.log(cities);
  let dates = [];
  cities.map(x => {
    console.log(x, x.startDate, x.endDate);
    let newStart = x.startDate;
    let newEnd = x.endDate;
    dates.push(newStart, newEnd);
    console.log(dates);
  });
  dates.sort();
  let startDate = dates[0];
  let endDate = dates[dates.length-1];

  console.log("newtrip1", tripName, startDate, endDate);
  return {
    type: CREATE_NEW_TRIP,
    payload: axios
      .post("/api/createNewTrip", { tripName, startDate, endDate })
      .then(resp => {
        console.log(resp);
        return resp.data;
      })
      .catch(err => err.errMessage)
  };
}

export function addCityToDatabase(city, tripId) {
  return {
    type: ADD_CITY_TO_DATABASE,
    payload: axios
      .post("/api/addCityToDatabase", { city, tripId })
      .then(resp => {
        console.log(resp);
        return resp.data;
      })
      .catch(err => err.errMessage)
  };
}

export function updateStartDate(startMUI, index) {
  let s = startMUI.toString();
  let startDate = moment(s).format("MM/DD/YYYY");
  return {
    type: UPDATE_START_DATE,
    payload: { startDate, index }
  };
}

export function updateEndDate(endMUI, index) {
  let e = endMUI.toString();
  let endDate = moment(e).format("MM/DD/YYYY");
  return {
    type: UPDATE_END_DATE,
    payload: { endDate, index }
  };
}

