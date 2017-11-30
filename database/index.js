const db = require('../models/index.js');

const Sequelize = require('sequelize');
const pg = require('pg');

db.sequelize.authenticate().then(() => {
  console.log('Success!');
}).catch((err) => {
  console.log(err);
});

db.sequelize.sync({force:true}); 
//uncomment above to drop tables on npm start
const createUser = (email, firstName, lastName, googleId) => {
  
return db.User.findOrCreate({
 where:
      {
 email,
        first_name: firstName,
        last_name: lastName,
        googleId,
      },
  }).spread((user, create) => { user.get({ plain: true }); });
}

const findUser = (googleId) => {
  return db.User.findOne({ where: { googleId: googleId } })
    .then(user => user);
};

module.exports.createUser = createUser;
module.exports.findUser = findUser;



