let tripID = 4;

export const addTrip = (destination, departureDate, returnDate) => {
  return {
    type: 'ADD_TRIP',
    id: tripID += 1,
    destination,
    departureDate,
    returnDate,
  };
};

export const selectOldTrip = (oldTripId) => {
  return {
    type: 'SELECT_TRIP',
    oldTripId: oldTripId,
  };
};