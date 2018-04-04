const axios = require("axios");
const apiKey = "AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko";
let places = [];

const getPlaceData = (req, res, next) => {
  // console.log(req.params.placeid);
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${
        req.params.placeid
      }&key=${apiKey}`
    )
    .then(resp => {
      places = (resp.data);
      res.status(200).json(places);
    })
    .catch(() => res.status(500).json());
};

const getCities = (req, res, next) => {
  console.log('getCities:',req.params);
  const db= req.app.get('db');
  db.get_cities([req.params.tripid])
  .then(resp => {
    console.log(resp);
    res.status(200).send(resp);})
  .catch(err => { console.log(err); next(err) });
};
const getTrip = (req, res, next) => {
  // console.log(req.body);
  const db= req.app.get('db');
  db.get_trip([req.body.userId])
  .then(res => res.status(200).send(res))
  .catch(err => { console.log(err); next(err) });
};
const getSaved = (req, res, next) => {
  // console.log(req.body);
  const db= req.app.get('db');
  db.get_saved([req.body.cityId])
  .then(res => res.status(200).send(res))
  .catch(err => { console.log(err); next(err) });
};
const getFood = (req, res, next) => {
  // console.log(req.body);
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${
        req.params.id
      }&key=${apiKey}`
    )
  .then(res => res.status(200).send(res))
  .catch(err => { console.log(err); next(err) });
};
const getThingsToDo = (req, res, next) => {
  // console.log(req.body);
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${
        req.params.id
      }&key=${apiKey}`
    )
  .then(res => res.status(200).send(res))
  .catch(err => { console.log(err); next(err) });
};
const getMuseums = (req, res, next) => {
  // console.log(req.body);
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${
        req.params.id
      }&key=${apiKey}`
    )
  .then(res => res.status(200).send(res))
  .catch(err => { console.log(err); next(err) });
};
const getFacts = (req, res, next) => {
  // console.log(req.body);
  axios
  .get(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=${
      req.params.id
    }&key=${apiKey}`
  )
  .then(res => res.status(200).send(res))
  .catch(err => { console.log(err); next(err) });
};




module.exports = {
    getPlaceData,
    getCities,
    getTrip,
    getSaved,
    getFood,
    getThingsToDo,
    getMuseums,
    getFacts
  };