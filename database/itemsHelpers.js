const db = require('../models/index.js');

const getUserItems = userId => (
  db.Item.findAll({
    attributes: ['item', 'category'],
    where: { userId },
  })
);

const getTripItems = tripId => (
  db.TripItem.findAll({
    where: { tripId },
    include: [db.Item],
  })
);

const add = (tripInfo) => {
  const { item, category, quantity, packed, userId, tripId } = tripInfo;

  return db.Item.findOrCreate({ where: { item, category, userId } })
    .spread((newItem) => {
      const itemId = newItem.get('id');
      return db.TripItem.create({
        quantity,
        packed,
        itemId,
        tripId,
      });
    })
    .then(tripItem => tripItem.get());
};


const updatePacked = id => (
  db.TripItem.findById(id)
    .then((tripItem) => {
      const packed = !tripItem.get('packed');
      tripItem.update({ packed });
    })
);

const deleteTripItem = id => (
  db.TripItem.findById(id)
    .then(tripItem => tripItem.destroy())
);

const editTripItem = (editInfo) => {
  const { id, item, category, quantity, itemId } = editInfo;

  db.TripItem.findById(id)
    .then(tripItem => tripItem.update({ quantity }));

  return db.Item.findById(itemId)
    .then(userItem => userItem.update({ item, category }));
};


  // db.Trip.update(
  //   { destination: 'Mexico City' },
  //   { where: { id: '099ef2ab-a05b-4a5d-b31e-ce6a3df19fb7' } },
  // );


module.exports.getUserItems = getUserItems;
module.exports.getTripItems = getTripItems;
module.exports.add = add;
module.exports.updatePacked = updatePacked;
module.exports.deleteTripItem = deleteTripItem;
module.exports.editTripItem = editTripItem;
