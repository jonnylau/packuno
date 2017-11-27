const db = require('../models/index.js');

const Sequelize = require('sequelize');
const pg = require('pg');

const sequelize = new Sequelize('packuno', 'packuno', 'packuno', {
  dialect: 'postgres',
});

sequelize.authenticate().then(() => {
  console.log('Success!');
}).catch((err) => {
  console.log(err);
});

const createUser = (email, firstName, lastName, googleId) => db.User.findOrCreate({
 where:
      {
 email,
        first_name: firstName,
        last_name: lastName,
        googleId,
      },
  }).spread((user, create) => { user.get({ plain: true }); });

const findUser = (googleId) => {
  return db.User.findOne({ where: { googleId: googleId } })
    .then(user => user);
};

module.exports.createUser = createUser;
module.exports.findUser = findUser;

