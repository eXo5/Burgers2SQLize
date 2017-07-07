module.exports = function(sequelize, DataTypes) {
sequelize.authenticate().then(function(errors) { console.log("errors: " + errors) });
  var burgers = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return burgers;
};
