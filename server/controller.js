const axios = require("axios");
const apiKey = "AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko";
let places = [];

const getPlaceData = (req, res, next) => {
  console.log(req.params.id);
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${
        req.params.id
      }&key=${apiKey}`
    )
    .then(resp => {
      places = (resp.data);
      console.log(places);
      res.status(200).json(places);
    })
    .catch(() => res.status(500).json());
};


module.exports = {
    getPlaceData
  };