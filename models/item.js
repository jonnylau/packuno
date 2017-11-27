module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    category: DataTypes.STRING,
    item: DataTypes.STRING,
  });
  Item.associate = (models) => {
    Item.belongsTo(models.User, {
      foreignKey: 'userId',
    });
    Item.hasMany(models.TripItem, {
      foreignKey: 'itemId',
    });
  };
  return Item;
};
