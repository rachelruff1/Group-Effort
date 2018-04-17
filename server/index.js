require("dotenv").config();

const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const massive = require("massive");
const port = 3001;
const ctrl = require("./controller.js");

const app = express();
// import from .env
const {
  CONNECTION_STRING,
  SESSION_SECRET,
  DOMAIN,
  CLIENT_SECRET,
  CLIENT_ID
} = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use(json());
app.use(cors());

//------------------ start of sessions -------------

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 4545454545
    }
  })
);

//------------------- end of sessions -----------
//------------ start of auth0 ------------

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: DOMAIN,
      clientSecret: CLIENT_SECRET,
      clientID: CLIENT_ID,
      scope: "openid profile email",
      callbackURL: "/auth"
    },
    (accessToken, resfreshToken, extraParams, profile, done) => {
      app
        .get("db")
        .getUserByAuthId(profile.id)
        .then(response => {
          if (!response[0]) {
            app
              .get("db")
              .createUserByAuthId([
                profile.id,
                profile._json.name,
                profile._json.email,
                profile.picture
              ])
              .then(created => done(null, created[0]));
          } else {
            return done(null, response[0]);
          }
        })
        .catch(console.log);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => done(null, user));

app.get(
  "/auth",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/",
    failureRedirect: "/auth"
  })
);

//-------------- end of auth0 --------------

//------------- start of endpoints --------------

app.get("/api/logout", (req, res) => {
  req.session.destroy();
  res.redirect("http://localhost:3000/#");
});

app.get("/api/getUser", (req, res) => {
  res.status(200).json(req.user);
});

app.get("/api/getUserInfo", (req, res) => {
  res.status(200).json(req.user);
});
//endpoint to check logged in status
app.get("/api/me", (req, res) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    res.status(500).json({ message: "User is not logged in" });
  }
});

app.get("/api/test", (req, res) => {
  res.status(200).send("working");
});
app.get("/api/getPlaceDetail/:placeid", ctrl.getPlaceData);

app.get("/api/getProfile", (req, res) => {
  req.app
    .get("db")
    .getUserImage([req.user.authid])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(console.log);
});
app.get("/api/getCities/:tripid", ctrl.getCities);
app.get("/api/getTrip/:tripid", ctrl.getTrip);
app.get("/api/getSaved/:id", ctrl.getSaved);
app.get("/api/getFood/:id", ctrl.getFood);
app.get("/api/getThingsToDo/:id", ctrl.getThingsToDo);
app.get("/api/getMuseums/:id", ctrl.getMuseums);
app.get("/api/getWebcams/:id", ctrl.getWebcams);
app.get("/api/getFacts/:id", ctrl.getFacts);
app.get("/api/getParks/:id", ctrl.getParks);
app.get("/api/getPhotoref/:id", ctrl.getPhotoref);
app.get("/api/getPlaceimg/:id", ctrl.getPlaceimg);

app.post("/api/createNewTrip", ctrl.createNewTrip);
app.post("/api/addCityToDatabase", ctrl.addCityToDatabase);
app.delete("/api/deleteTrip/:id", ctrl.deleteTrip);
app.post("/api/createNewTrip", ctrl.createNewTrip);
app.post("/api/addCityToDatabase", ctrl.addCityToDatabase);
app.get("/api/getMall/:id", ctrl.getMall);
app.get("/api/getMovie/:id", ctrl.getMovie);

app.delete("/api/deleteCity/:id", ctrl.deleteCity);
app.put("/api/updateTripOnEdit", ctrl.updateTripOnEdit);
app.post(`/api/addCitiesOnEdit/:id`, ctrl.addCitiesOnEdit);
app.put("/api/updateCitiesOnEdit", ctrl.updateCitiesOnEdit);

app.get("/api/getAllTrips", ctrl.getAllTrips);

app.post("/api/addToSaved", ctrl.addToSaved);
app.delete("/api/deleteFromSaved/:id", ctrl.deleteFromSaved);

//post request for Profile.js (Jordan)
app.put("/api/updateProfile", ctrl.updateProfile);

//------------- end of endpoints ----------------
app.listen(port, () => {
  console.log(`server is on port ${port}`);
});
