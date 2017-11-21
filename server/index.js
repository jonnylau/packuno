const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pg = require('pg');
// FILL IN DATABASE FILE --> const connectionString = process.env.DATABASE_URL

const app = express();
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

//Response to client get request for trips in database
// app.get('/alltrips', (req, res) => {
//   // Get a Postgres client from the connection pool
//   pg.connect(connectionString, (err, client) => {
//     // Handle connection errors
//     if (err) {
//       return res.status(500).json({success: false, data: err});
//     }
//     // SQL Query > Select Data
//     const query = client.query('SELECT * FROM Trip ORDER BY start_date;', (err, data) => {
//       if (err) {
//         console.log('Error getting trips data from database');
//       }
//       console.log('Success getting data from database', data);
//       res.status(200).send(data);
//     });
//   });
// });

const port = process.env.PORT || 3000;
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(port, () => {
  console.log(`Server running at port:${port}`);
});