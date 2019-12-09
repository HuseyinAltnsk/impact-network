// Dependencies
const env = require("dotenv").config();
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const oauth2 = require("passport-azure-ad-oauth2");
const jwt = require("jsonwebtoken");
const cors = require("cors");

// Initialize users models
require("./models");

// connect to database
mongoose.connect(process.env.MONGODB_URL);

const app = express();

// NOTE: You probs don't need this.
app.use(cors());

// Setup json parsing
app.use(bodyParser.json());

// Parse URL codes
app.use(bodyParser.urlencoded({extended: true}));

// Setup logging
app.use(morgan("tiny"));

app.use(cookieParser());
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        maxAge: 1000 * 60 * 60 * 4
    })
);

//Setup up oauth
app.use(passport.initialize());

//Setup sessions handling in passport
app.use(passport.session());

//Setup login routes.
app.use("/login", require("./routes/login"));

const User = require("mongoose").model("User");

passport.serializeUser((user, done) => {
    User.findOneAndUpdate({email: user.unique_name}, {
        firstName: user.given_name,
        lastName: user.family_name,
        email: user.unique_name
    }, {upsert: true, runValidators: true, setDefaultsOnInsert: true}, (err, result) => {
        done(null, user.unique_name);
    });
});

//Same as above.
passport.deserializeUser((unique_name, done) => {
    User.findOne({email: unique_name}, (err, user) => {
        done(null, user);
    });
});

//For Davidson Account Holders
passport.use(
    new oauth2(
        {
            callbackURL: "/login/callback",
            clientID: process.env.OAUTH2_APP_ID,
            clientSecret: process.env.OAUTH2_SECRET,
            resource: process.env.OAUTH2_RESOURCE_ID,
            tenant: process.env.OAUTH2_TENANT
        },
        (token, tokenSecret, params, profile, done) => {
            let user = jwt.decode(params.access_token);
            //Pass user to be serialized.
            done(null, user);
        }
    )
);

// Force all user to be logged in when in production.
// if (process.env.NODE_ENV === "PROD") {
app.use((req, res, next) => {
    if (process.env.NODE_ENV === "DEV") {
        console.log("YAY");
        // this is the 3 info that is displayed in console
        // to be able to create ride(so get ride owner), you either need to
        // add the _id here (probs not) or get the id by first and lastname combo in the rides.js where
        // the router for creating a ride is being called.
        req.user = {
        firstName: "Huseyin",  // you can give this an _id too now that you now how to..if you need it
        lastName: "Altinisik",
        email: "hualtinisik@davidson.edu"
        };
        User.findByIdAndUpdate(req.user._id, req.user, { upsert: true }).then(
        () => {}
        );
        next();
    } 
    // else {
    //     if (req.isAuthenticated()) next();
    //     else res.redirect("/login");
    // }

    // if (req.isAuthenticated()) {
    //     next();
    // }
    // else {
    //     res.redirect("/login");
    // }
});
// }

// Define static folder. Must be below login path.
app.use(express.static(path.join(__dirname, "../build")));

// Setup routing
app.use(require("./routes"));

// Start server
app.listen(process.env.SERVER_PORT, () => console.log("✅ server ready."));
