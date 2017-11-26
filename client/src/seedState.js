const seedState = {
  currentUserId: 1,
  currentTripId: '099ef2ab-a05b-4a5d-b31e-ce6a3df19fb7',
  trips: {
    byId: {
      1: {
        id: 1,
        destination: 'Hong Kong',
        departureDate: '2017-9-29',
        returnDate: '2017-11-01',
      },
      '099ef2ab-a05b-4a5d-b31e-ce6a3df19fb7': {
        id: 2,
        destination: 'Mexico City',
        departureDate: '2018-01-07',
        returnDate: '2018-01-16',
      },
      3: {
        id: 3,
        destination: 'Greenland',
        departureDate: '2018-06-15',
        returnDate: '2018-07-01',
      },
      4: {
        id: 4,
        destination: 'Tokyo',
        departureDate: '2018-08-13',
        returnDate: '2018-08-29',
      },
    },
    allIds: [1, 2, 3, 4],
  },
  items: {
    byId: {
      1: {
        id: 1,
        item: 'Shampoo',
        category: 'Toiletries',
        quantity: 0,
        packed: false,
      },
      2: {
        id: 2,
        item: 'Conditioner',
        category: 'Toiletries',
        quantity: 0,
        packed: false,
      },
      3: {
        id: 3,
        item: 'Socks',
        category: 'Clothes',
        quantity: 4,
        packed: false,
      },
      4: {
        id: 4,
        item: 'Charger',
        category: 'Accessories',
        quantity: 0,
        packed: false,
      },
    },
    allIds: [1, 2, 3, 4],
    categories: ['Toiletries', 'Clothes', 'Accessories'],
    // pastItemsWCat: {
    //   'Shampoo': 'Toiletries',
    //   'Conditioner': 'Toiletries',
    //   'Socks': 'Clothes',
    //   'Charger': 'Accessories',
    //   'Sandals': 'Shoes',
    //   'Toothbrush': 'Toiletries',
    //   'Black boots': 'Shoes',
    // },
  },
  visibilityFilter: 'SHOW_ALL',
  weatherWidget: 'SHOW_CURRENT',
  historicalWeather: [],
  forecastWeather: [],
};


export default seedState;
