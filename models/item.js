

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    category: DataTypes.STRING,
    item: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        Item.belongsTo(models.User, {
          foreignKey: 'userId',
        });
        Item.hasMany(models.TripItems, {
          foreignKey: 'itemId',
        });
      },
    },
  });
  return Item;
};
