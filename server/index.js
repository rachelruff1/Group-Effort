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
      callbackURL: "/Auth"
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
            console.log(profile);
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
  "/Auth",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/",
    failureRedirect: "/Auth"
  })
);

//-------------- end of auth0 --------------

//------------- start of endpoints --------------

app.get("/api/test", (req, res) => {
  res.status(200).send("working");
});
app.get("/api/getPlaceDetail/:placeid", ctrl.getPlaceData);

app.get("/api/getProfile", (req, res) => {
  console.log(req.user);
  req.app
    .get("db")
    .getUserImage([req.user.authid])
    .then(response => {
      res.status(200).json(response);
    });
});
app.get('/api/getCities/:tripid', ctrl.getCities);
app.get('/api/getTrip', ctrl.getTrip);
app.get('/api/getSaved', ctrl.getSaved);
app.get('/api/getFood', ctrl.getFood);
app.get('/api/getThingsToDo', ctrl.getThingsToDo);
app.get('/api/getMuseums', ctrl.getMuseums);
app.get('/api/getFacts', ctrl.getFacts);



//------------- end of endpoints ----------------
app.listen(port, () => {
  console.log(`server is on port ${port}`);
});
