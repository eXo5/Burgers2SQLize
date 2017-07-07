module.exports = function(sequelize, DataTypes) {
  const burgers = sequelize.define("burgers", {
    burger_name: {
    	type: Sequelize.STRING,
    },
    devoured: {
    	type: Sequelize.BOOLEAN
    },
    createdAt: {
    	type: Sequelize.DATE, defaultValue: Sequelize.NOW
    }
  });
  return burgers;
};
