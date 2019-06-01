var db = require('../models');

// Routes
// =============================================================
module.exports = {
  findAll: function(req, res) {
    db.Post.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  },
  create: function(req, res) {
    db.Post.create({
      title: req.body.title,
      author: req.body.author,
      body: req.body.body,
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  },
  
};

