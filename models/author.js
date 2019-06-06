module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("Author", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING, 
      password: DataTypes.STRING
    });
  
    Author.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts <- May change this if we want to keep their posts

      //Might change this. If user/author leaves we might want to keep their posts
      Author.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return Author;
  };
  