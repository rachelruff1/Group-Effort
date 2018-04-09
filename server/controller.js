const axios = require("axios");
const googleApiKey = "AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko";
const googlePlacesBase =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
let places = [];
let museums = [];
let parks = [];
let food = [];
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
      // console.log(resp);
      res.status(200).send(resp);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};
const getTrip = (req, res, next) => {
  console.log("user:", req.user, "params:", req.params);
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
  console.log("FOOOOOOOOOOD RESDUCSER", req.params);
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
  getParks
};
