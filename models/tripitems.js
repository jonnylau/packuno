module.exports = (sequelize, DataTypes) => {
  const TripItem = sequelize.define('TripItem', {
    quantity: DataTypes.INTEGER,
    packed: DataTypes.BOOLEAN,
  });
  TripItem.associate = (models) => {
    TripItem.belongsTo(models.Trip, {
      foreignKey: 'tripId',
    });
    TripItem.belongsTo(models.Item, {
      foreignKey: 'itemId',
    });
  };
  return TripItem;
};
