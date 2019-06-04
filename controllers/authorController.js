var db = require('../models');

// Routes
// =============================================================
module.exports = {

  create: function(req, res) {
    db.Author.create({
      name: req.body.username,
      password: req.body.password
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  },
  
};

