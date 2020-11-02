module.exports = function(sequelize, DataTypes) {
    var Rating = sequelize.define("Ratings", {
        text: DataTypes.STRING,
      
    });
    return Rating;
  };
  