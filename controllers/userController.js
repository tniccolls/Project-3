var db = require('../models');
var jwt = require('jsonwebtoken')
// Routes
// =============================================================
module.exports = {
  validate: function(req, res) {
    return jwt.verify(req.body.token, 'shhhhh', function(err, _decoded) {
      if(err){
        return res.status(400).send({msg: "invalid token"});
      }
      return res.status(200).send({msg: "valid token"});
    });
  },

  login: function (req, res) {
    db.User.findOne({where: {userName: req.body.userName}}).then(function(u){
      if(!u){
        return res.status(400).send({msg: "No user found"})
      }
      if(u.password !== req.body.password){
        return res.status(400).send({msg: "Wrong password"})
      }
      var token = jwt.sign({ userName: user.userName }, 'shhhhh');
      return res.json({ userName: user.userName, token: token });
    }).catch(e => res.status(400).send({msg: "Invalid request"}))
  },
  signup: function(req, res) {
    db.User.create({
        userName: req.body.userName,
        password: req.body.password,
    }).then(function(user) {
      var token = jwt.sign({ userName: user.userName }, 'shhhhh');
      res.json({ userName: user.userName, token: token });
    });
  },
  
};

