const axios = require('axios');
const apiKey = 'AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko';
let places = [];

const getPlaceData = (req, res, next) => {
    axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.params.id}=${apiKey}`)
    .then(resp=>{places.push(resp.data); res.status(200).json(places)})
    .catch(()=>res.status(500).json())
}