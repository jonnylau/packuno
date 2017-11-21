const express = require('express');
const bodyParser = require('body-parser');
// FILL IN DATABASE FILE --> const database = require(../database/index.js);

const app = express();
app.use(express.static(__dirname + '/../client/dist/'));

const port = process.env.PORT || 3000;
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(port, () => {
  console.log(`Server running at port:${port}`);
});

