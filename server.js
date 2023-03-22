'use strict';
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const LoginModel = require('./backend/models/loginschema');
const BlogModel = require('./backend/models/blogModel');
const userRoutes = require('./backend/routes/userRoutes');
const blogRoutes = require('./backend/routes/blogRoutes');
const helmet = require('helmet');
const LocalStrategy = require("passport-local").Strategy;
const { ObjectID } = require('mongodb');

app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(cookieParser("process.env.SESSION_SECRET"));

app.use(passport.initialize());

app.use(passport.session());

app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));

mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, data) => {
  if (err) {
    console.log('Database error' + err);
  } else {
    console.log('Success!!');
  }
});

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  LoginModel.findOne(
    { _id: new ObjectID(id) },
    (err, doc) => {
      done(null, doc);
    }
  );
});

passport.use(new LocalStrategy(
  function (username, password, done) {
    LoginModel.findOne({ username: username }, (err, user) => {
      console.log('User ' + username + ' attempted to log in.');
      if (err) throw err;
      if (!user) return done(null, false);
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) throw err;
        if (result === true) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  }
));

app.use('/', userRoutes);
app.use('/', blogRoutes);

const PORT = process.env.PORT || 8800;

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;