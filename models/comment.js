module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      
      name: DataTypes.STRING
    });
  
    Comment.associate = function(models) {
      Comment.belongsTo(models.Post)
    };
  
    return Comment;
  };
  