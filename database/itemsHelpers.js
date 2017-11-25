const db = require('../models/index.js');

const add = (item, category, quantity = 2, packed = false, user_id = '832b2ce1-edd7-4a93-9486-08a8be021ed4', tripId = 'c1849906-fa28-414c-929f-f47755cd483d') => {
  db.Item.findOrCreate({ where: { item, category } })
    .spread((newItem, created) => {
      console.log(newItem.get({
        plain: true,
      }));
      const itemId = newItem.get('id');
      db.TripItem.create({ itemId, quantity, packed, tripId });
    })
    .then((tripItem) => {
      console.log(tripItem.get({
        plain: true,
      }));
    });
};


const getUserItems = () => {
  return db.Item.findAll({
    attributes: ['item', 'category'],
  });
};

// Use when can get userIdd
// const getUserItems = (userId) => {

//   db.Item.findAll({
//     attributes: ['item', 'category'],
//     where: { userId },
//   });
// };


// const newUser = () => {
//   db.Trip.create({ Destination: 'London', start_date: '2017-11-25', end_date: '2018-01-13', userId: '832b2ce1-edd7-4a93-9486-08a8be021ed4' })
//     .then((user) => {
//       console.log(user.get({
//         plain: true,
//       }));
//     });
// };

module.exports.add = add;
module.exports.getUserItems = getUserItems;
// module.exports.newUser = newUser;
