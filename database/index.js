const Sequelize = require('sequelize');
const pg = require('pg');
const db = require('../models/index.js');

const sequelize = new Sequelize('packuno', 'packuno', 'packuno', {
  dialect: 'postgres',
});


// Uncomment sync line if you need to drop tables (i.e. if models change)
sequelize.authenticate().then(() => {
  console.log('Success!');
  // db.sequelize.sync({force: true});
}).catch((err) => {
  console.log(err);
});


// Uncomment if seed data is needed

// db.User.create({ email: 'test7email@gmail.com', first_name: 'Elena', last_name: 'Czubiak' }).then(user => user.get({
//   plain: true,
// })).then((user) => {
//   return db.Trip.create({ destination: 'Mexico City', userId: user.id, start_date: new Date(), end_date: new Date() });
// }).then((trip)=>{
//   console.log(trip);
// });


const Project = sequelize.define('project', {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
});

