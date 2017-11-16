

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('TripItems', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    tripId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Trips',
        key: 'id',
      },
    },
    itemId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Items',
        key: 'id',
      },
    },
    quantity: Sequelize.INTEGER,
    packed: Sequelize.BOOLEAN,
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('TripItems'),
};
