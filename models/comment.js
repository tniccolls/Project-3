module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      
      name: DataTypes.STRING
    });
  
    Comment.associate = function(models) {
      //Associate with Posts & Authors?
    };
  
    return Comment;
  };
  