const Sequelize = require('sequelize');
const pg = require('pg');
const db = require('../models/index.js');

const sequelize = new Sequelize('packuno', 'packuno', 'packuno', {
  dialect: 'postgres',
});

// sequelize.authenticate().then(() => {
//   console.log('Success!');
// }).catch((err) => {
//   console.log(err);
// });

console.log('in database/index.js');

sequelize.authenticate().then(() => {
  console.log('Success!');
  // db.sequelize.sync({force: true});
}).catch((err) => {
  console.log(err);
});


// db.User.create({ email: 'test7email@gmail.com', first_name: 'Elena', last_name: 'Czubiak' }).then(user => user.get({
//   plain: true,
// })).then((user) => {
//   return db.Trip.create({ userId: user.id, start_date: new Date(), end_date: new Date() });
// }).then((trip)=>{
//   console.log(trip);
// });


const Project = sequelize.define('project', {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
});

