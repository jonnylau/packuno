module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unqiue: true,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Trip, {
      foreignKey: 'userId',
    });
    User.hasMany(models.Item, {
      foreignKey: 'userId',
    });
  };
  return User;
};
