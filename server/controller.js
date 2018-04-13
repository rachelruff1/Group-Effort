const axios = require("axios");
const OldgoogleApiKey = "AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko";
const googleApiKey = "AIzaSyA88FOcacMikGWCrki1HUhCysZZ91y5JDs";
const googlePlacesBase =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
const googlePlacesImgBase =
  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=";
let places = [];
let museums = [];
let parks = [];
let food = [];
let mall = [];
let movie = [];
let placeimg = "";
const getUser = (req, res, next) => {
  const db = req.app.get("db");
  db.user
    .get_user([req.user.authid])
    .then(user => {
      // console.log(user);
      res.status(200).send(user);
    })
    .catch(() => res.status(500).send());
};

const editUser = (req, res, next) => {
  const db = req.app.get("db");
  const { name, email, picture } = req.body;
  db.user
    .edit_user([req.user.authid, name, email, picture])
    .then(res.status(200).send())
    .catch(() => res.status(500).send());
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/#/");
  });
};

const getPlaceData = (req, res, next) => {
  // console.log(req.params.placeid);
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${
        req.params.placeid
      }&key=${googleApiKey}`
    )
    .then(resp => {
      places = resp.data;
      res.status(200).json(places);
    })
    .catch(() => res.status(500).json());
};

const getCities = (req, res, next) => {
  // console.log('getCities:',req.params);
  const db = req.app.get("db");
  db
    .get_cities([req.params.tripid])
    .then(resp => {
      console.log(resp);
      res.status(200).send(resp);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};
const getTrip = (req, res, next) => {
  console.log("params:", req.params);
  const db = req.app.get("db");
  db
    .get_trip([req.params.tripid])
    .then(resp => {
      // console.log(resp);
      res.status(200).send(resp);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};
const getSaved = (req, res, next) => {
  // console.log(req.body);
  const db = req.app.get("db");
  db
    .get_saved([req.body.cityId])
    .then(resp => {
      console.log(resp);
      res.status(200).send(resp);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};
const getFood = (req, res, next) => {
  console.log("m", req.params);
  axios
    .get(
      `${googlePlacesBase}${
        req.params.id
      }&type=restaurant&radius=1000&key=${googleApiKey}`
    )
    .then(resp => {
      food = resp.data;
      res.status(200).json(food);
    })
    .catch(() => res.status(500).json());
};
const getThingsToDo = (req, res, next) => {
  // console.log(req.params);
  axios
    .get(
      `${googlePlacesBase}${
        req.params.id
      }&type=museum&radius=1000&key=${googleApiKey}`
    )
    .then(resp => {
      museums = resp.data;
      res.status(200).json(museums);
    })
    .catch(() => res.status(500).json());
};
const getMuseums = (req, res, next) => {
  console.log("MUSEUMMMMMSSS:", req.params);
  axios
    .get(
      `${googlePlacesBase}${
        req.params.id
      }&type=museum&radius=1000&key=${googleApiKey}`
    )
    .then(resp => {
      museums = resp.data;
      res.status(200).json(museums);
    })
    .catch(() => res.status(500).json());
};
const getFacts = (req, res, next) => {
  // console.log(req.body);
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${
        req.params.id
      }&key=${googleApiKey}`
    )
    .then(resp => {
      console.log(resp);
      res.status(200).send(resp);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};

const getWebcams = (req, res, next) => {
  // console.log(req.body);
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${
        req.params.id
      }&key=${googleApiKey}`
    )
    .then(resp => {
      console.log(resp);
      res.status(200).send(resp);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};
const getParks = (req, res, next) => {
  console.log("THE PARKS:", req.params);
  axios
    .get(
      `${googlePlacesBase}${
        req.params.id
      }&type=park&radius=1000&key=${googleApiKey}`
    )
    .then(resp => {
      parks = resp.data;
      res.status(200).json(parks);
    })
    .catch(() => res.status(500).json());
};
const getMall = (req, res, next) => {
  console.log("Malllllllls", req.params);
  axios
    .get(
      `${googlePlacesBase}${
        req.params.id
      }&type=shopping_mall&radius=1000&key=${googleApiKey}`
    )
    .then(resp => {
      mall = resp.data;
      res.status(200).json(mall);
    })
    .catch(() => res.status(500).json());
};
const getMovie = (req, res, next) => {
  console.log("MOOOOViessss", req.params);
  axios
    .get(
      `${googlePlacesBase}${
        req.params.id
      }&type=movie_theater&radius=1000&key=${googleApiKey}`
    )
    .then(resp => {
      movie = resp.data;
      res.status(200).json(movie);
    })
    .catch(() => res.status(500).json());
};

const createNewTrip = (req, res, next) => {
  console.log("new trip ctrl", req.body);
  let tempId = 9;
  //REPLACE TEMP WITH REQ.USER.ID WHEN IT IS WORKING!!!!!
  const { tripName, startDate, endDate } = req.body;
  const db = req.app.get("db");
  db
    .create_new_trip([tripName, startDate, endDate, tempId])
    .then(resp => {
      console.log(resp);
      res.status(200).send(resp);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};

const getPlaceimg = (req, res, next) => {
  axios
    .get(`${googlePlacesImgBase}${req.params.id}&key=${googleApiKey}`)
    .then(resp => {
      res.status(200).json(resp.data);
    })
    .catch(() => res.status(500).json());
};

const addCityToDatabase = (req, res, next) => {
  console.log("new trip ctrl", req.body);
  const {
    cityName,
    country,
    endDate,
    latLng,
    placeId,
    startDate,
    state
  } = req.body.city;
  const { tripId } = req.body;
  const db = req.app.get("db");
  db
    .add_city_to_database([
      cityName,
      state,
      country,
      latLng,
      placeId,
      startDate,
      endDate,
      tripId
    ])
    .then(resp => {
      // console.log(resp);
      res.status(200).send(resp);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};

const getAllTrips = (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const db = req.app.get("db");
  db
    .get_all_trips([id])
    .then(resp => {
      console.log(resp);
      res.status(200).send(resp);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};

const getPhotoref = (req, res, next) => {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${
        req.params.id
      }&key=${googleApiKey}`
    )
    .then(resp => {
      res.status(200).send(resp.data.result.photos[0].photo_reference);
    });
};

const deleteTrip = (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const db = req.app.get("db");
  db
    .delete_trip([id])
    .then(resp => {
      console.log(resp);
      res.status(200).send(resp);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};

const deleteCity = (req, res, next) => {
  const {id} = req.params;
  console.log(id);
  const db = req.app.get("db");
  db
    .delete_city([id])
    .then(resp => {
      console.log(resp);
      res.status(200).send(resp);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};

const updateTripOnEdit = (req, res, next) => {
  const {tripId, tripName, startDateOnUpdateTrip, endDateOnEditTrip} = req.body;
  const db = req.app.get("db");
  db
    .update_trip_on_edit([tripId, tripName, startDateOnUpdateTrip, endDateOnEditTrip])
    .then(resp => {
      console.log(resp);
      res.status(200).send(resp);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};

const addCitiesOnEdit = (req, res, next) => {
  console.log(req.body, req.params);
  const {id} = req.params;
  const {city_name,
    state,
    country,
    lat_lng,
    place_id,
    start_date,
    end_date,
    trip_id} = req.body.city;  

    console.log(id, state,
      country,
      lat_lng,
      place_id,
      start_date,
      end_date,
      trip_id);
  const db = req.app.get("db");
  db
    .add_city_on_edit([city_name,
      state,
      country,
      lat_lng,
      place_id,
      start_date,
      end_date,
      id])
    .then(resp => {
      console.log(resp);
      res.status(200).send(resp);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};

const updateCitiesOnEdit = (req, res, next) => {
  const {
    start_date,
    end_date, city_id} = req.body.city;
    console.log(start_date,
      end_date, city_id)
  const db = req.app.get("db");
  db
    .update_cities_on_edit([
      start_date,
      end_date, city_id])
    .then(resp => {
      console.log(resp);
      res.status(200).send(resp);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};

module.exports = {
  getPlaceData,
  getCities,
  getTrip,
  getSaved,
  getFood,
  getThingsToDo,
  getMuseums,
  getWebcams,
  getFacts,
  getParks,
  getPlaceimg,
  getPhotoref,

  deleteTrip,
  createNewTrip,
  addCityToDatabase,
  getMall,
  getMovie,
  getAllTrips,
  deleteCity,
  updateTripOnEdit,
  addCitiesOnEdit,
  updateCitiesOnEdit
};
