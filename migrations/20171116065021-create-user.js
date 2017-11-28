

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    email: {
      type: Sequelize.STRING,
      unqiue: true,
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    googleId: Sequelize.STRING,
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users'),
};
