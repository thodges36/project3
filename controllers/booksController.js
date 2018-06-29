const db = require("../models");

var items = require("../models/items");



// Defining methods for the booksController
module.exports = {

  isLoggedIn: function(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    req.flash("error", "You must be signed in to do that.");
    res.redirect("/login");

  },

  checkUseritems: function(req, res, next) {
    if(req.isAuthenticated()){
      items.findById(req.params.id, function (err, items) {
        if(items.author.id.equals(req.user._id)){
          next();
        } else {
          req.flash("error", "You are unauthorized to do that.");
          res.redirect("/items" + req.params.id);
        }
      });
    } else {
      req.flash("error", "You are unauthorized to do that.");
      res.redirect("/items" + req.params.id);
    }
  },

  findAll: function(req, res) {
    db.Items
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Items
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Items
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Items
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Items
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
