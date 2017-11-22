const express = require('express');
const bodyParser = require('body-parser');
const isoCode = require('../client/src/utils/weatherHelper.js');
const request = require('request');
const rp = require('request-promise');

// FILL IN DATABASE FILE --> const database = require(../database/index.js);

const app = express();
app.use(express.static(__dirname + '/../client/dist/'));

const port = process.env.PORT || 3000;
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

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
    uri: `http://api.wunderground.com/api/1acaa967ad91ec5b/forecast10day/q/CA/San_Francisco.json`,
  };
  rp(options).then(result => result).then((result) => {
    res.body= result;
    res.send(res.body);
  });
});

app.listen(port, () => {
  console.log(`Server running at port:${port}`);
});

