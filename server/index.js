const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// FILL IN DATABASE FILE --> const database = require(../database/index.js);

const app = express();
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

const port = process.env.PORT || 3000;
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(port, () => {
  console.log(`Server running at port:${port}`);
});