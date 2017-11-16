

module.exports = (sequelize, DataTypes) => {
  const TripItem = sequelize.define('TripItem', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    quantity: DataTypes.INTEGER,
    packed: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate(models) {
        TripItem.belongsTo(models.Trip, {
          foreignKey: 'tripId',
        });
        TripItem.belongsTo(models.Item, {
          foreignKey: 'itemId',
        });
      },
    },
  });
  return TripItem;
};
