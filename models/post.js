module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Post.associate = function(models) {
    // A Post can't be created without an Author due to the foreign key constraint
    //This may be subject to change when user auth is completed
    Post.hasMany(models.Comment, {
      onDelete: "cascade"
    })
    Post.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Post;
};
