const express = require('express');
const bodyParser = require('body-parser');
const isoCode = require('../client/src/utils/weatherHelper.js');
const request = require('request');
const session = require('express-session')
const rp = require('request-promise');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const Promise = require('bluebird');
const path = require('path');
const pg = require('pg');
const db = require('../database/index.js');
const port = process.env.PORT || 3000;
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });


passport.use(new GoogleStrategy(
  {
    clientID: '701084384568-cfgkqkmh3th8usnokt4aqle9am77ei0f.apps.googleusercontent.com',
    clientSecret: 'NT4wXnxK6E8UBtEYopvP8M-h',
    callbackURL: 'http://localhost:3000/auth/google/callback',
    passReqToCallBack: true,
  },
  ((accessToken, refreshToken, profile, done) => {
    db.createUser(profile.emails[0].value, profile.name.givenName, profile.name.familyName, profile.id.toString());
    done(null, profile);
  })
));

const isAuthenticated=  (req, res, next) =>{
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/login');
}
const app = express();
app.use(session({ secret: 'anything', resave: false, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  console.log('serialize User');
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  return new Promise((resolve, reject) => {
  console.log('deserialize user');
  resolve(db.findUser(id))
  }).then((user) => {
  done(null, user.dataValues);
  });
});

app.get('/check/', (req, res) => {
  if(req.isAuthenticated()){
    res.send(true);
  } else {
  res.send(false);
  }
});

app.get('/', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.get('/trip', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.get('/login', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.get('/dashboard', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.post('/items', isAuthenticated, (req, res) => {
  itemsHelper.add('Socks', 'Clothes');
});

app.get('/auth/google', 
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback', 
  passport.authenticate('google', {
    successRedirect: '/login',
    failureRedirect: '/',
  })
);

app.get('/weather/', (req, res) => {
  const tripStart = '20170827';
  const tripEnd = '20170905';
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return isoCode.isoCode('france').then((result) => {
    const startMonth = Number(tripStart.slice(4, 6)) - 1;
    const endMonth = Number(tripEnd.slice(4, 6)) - 1;
    const rendered = [[months[startMonth], result[startMonth]], [months[endMonth], result[endMonth]]];
    res.body = JSON.stringify(rendered);
    res.send(res.body);
  });
});

app.get('/forecast/', (req, res) => {
  const options = {
    type: 'GET',
    uri: 'http://api.wunderground.com/api/1acaa967ad91ec5b/forecast10day/q/CA/San_Francisco.json',
  };
  rp(options).then(result => result).then((result) => {
    res.body = result;
    res.send(res.body);
  });
});


app.listen(port, () => {
  console.log(`Server running at port:${port}`);
});
