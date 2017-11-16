

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      unqiue: true,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        User.hasMany(models.Trip, {
          foreignKey: 'userId',
        });
        User.hasMany(models.Item, {
          foreignKey: 'userId',
        });
      },
    },
  });
  return User;
};
