const express = require('express');
const bodyParser = require('body-parser');
const isoCode = require('../client/src/utils/weatherHelper.js');
const request = require('request');
const rp = require('request-promise');
const itemsHelper = require('../database/itemsHelpers');
const tripsHelper = require('../database/tripsHelpers');

// FILL IN DATABASE FILE --> 
const database = require('../database/index.js');
const path = require('path');
const pg = require('pg');
// FILL IN DATABASE FILE --> const connectionString = process.env.DATABASE_URL

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());

// App pages

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.get('/trip', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

// API Endpoints

app.get('/users/:userId/trips', (req, res) => {
  tripsHelper.getTrips(req.params.userId)
    .then((results) => {
      res.send(results);
    });
});

app.post('/trips', (req, res) => {
  tripsHelper.add(req.body)
    .then((results) => {
      res.send({ id: results });
    });
});

app.post('/trips/items', (req, res) => {
  tripsHelper.addItemsToTrip(req.body)
    .then(() => {
      res.sendStatus(201);
    });
});


app.post('/items', (req, res) => {
  itemsHelper.add(req.body)
    .then((results) => {
      res.send(results);
    });
});

app.get('/users/:userId/items', (req, res) => {
  itemsHelper.getUserItems(req.params.userId)
    .then((results) => {
      res.send(results);
    });
});

app.get('/trips/:tripId/items', (req, res) => {
  itemsHelper.getTripItems(req.params.tripId)
    .then((results) => {
      res.send(results);
    });
});


app.patch('/trip/items/:id/packed', (req, res) => {
  itemsHelper.updatePacked(req.params.id)
    .then(() => {
      res.sendStatus(201);
    });
});

app.delete('/trip/items/:id', (req, res) => {
  itemsHelper.deleteTripItem(req.params.id)
    .then(() => {
      res.sendStatus(200);
    });
});

app.patch('/trip/items/:id', (req, res) => {
  itemsHelper.editTripItem(req.body)
    .then(() => {
      res.sendStatus(200);
    });
});


app.get('/weather/', (req, res) => {
  const tripStart = '20170827';
  const tripEnd = '20170905';
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return isoCode.isoCode('france').then((result) => {
    const startMonth = Number(tripStart.slice(4, 6)) - 1;
    const endMonth = Number(tripEnd.slice(4, 6)) - 1;
    const rendered = [[months[startMonth], result[startMonth]], [months[endMonth], result[endMonth]]];
    console.log(rendered);
    res.body = JSON.stringify(rendered);
    res.send(res.body);
  });
});

app.get('/forecast/', (req, res) => {
  const options = {
    type: 'GET',
    uri: `http://api.wunderground.com/api/1acaa967ad91ec5b/forecast10day/q/CA/San_Francisco.json`,
  };
  rp(options).then(result => result).then((result) => {
    res.body= result;
    res.send(res.body);
  });
});


const port = process.env.PORT || 3000;
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(port, () => {
  console.log(`Server running at port:${port}`);
});