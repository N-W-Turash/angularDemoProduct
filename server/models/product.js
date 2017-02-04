'use strict';
module.exports = function(sequelize, DataTypes) {
  //Define the Author model
  var Author = sequelize.define('Product', {
    //Define the data types of the Author fields
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    //set the timestamps to be underscored: (created_at, updated_at)
    underscored: true,
  });
  return Author;
};