module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    destination: DataTypes.STRING,
    country: DataTypes.STRING,
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  Trip.associate = (models) => {
    Trip.belongsTo(models.User, {
      foreignKey: 'userId',
    });
    Trip.hasMany(models.TripItem, {
      foreignKey: 'tripId',
    });
  };
  return Trip;
};
