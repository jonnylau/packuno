const db = require('../models/index.js');

const add = tripInfo => (
  db.Trip.create(tripInfo)
    .then(newTrip => newTrip.get('id'))
);

const getTrips = userId => (
  db.Trip.findAll({ where: { userId } })
);

const addItemsToTrip = (tripsInfo) => {
  const { tripId, oldTripId } = tripsInfo;

  return db.TripItem.findAll({ where: { tripId: oldTripId } })
    .then((tripItems) => {
      const newItems = tripItems.map(tripItem => ({
        quantity: tripItem.quantity,
        packed: false,
        tripId,
        itemId: tripItem.itemId,
      }));
      db.TripItem.bulkCreate(newItems);
    });
};


module.exports.add = add;
module.exports.addItemsToTrip = addItemsToTrip;
module.exports.getTrips = getTrips;
