

module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    Destination: DataTypes.STRING,
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate(models) {
        Trip.belongsTo(models.User, {
          foreignKey: 'userId',
        });
        Trip.hasMany(models.TripItem, {
          foreignKey: 'tripId',
        });
      },
    },
  });
  return Trip;
};
