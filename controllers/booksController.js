const db = require("../models");

var Item = require("../models/item");



// Defining methods for the booksController
module.exports = {

  isLoggedIn: function(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    req.flash("error", "You must be signed in to do that.");
    res.redirect("/login");

  },

  checkUserItem: function(req, res, next) {
    if(req.isAuthenticated()){
      Item.findById(req.params.id, function (err, item) {
        if(item.author.id.equals(req.user._id)){
          next();
        } else {
          req.flash("error", "You are unauthorized to do that.");
          res.redirect("/item" + req.params.id);
        }
      });
    } else {
      req.flash("error", "You are unauthorized to do that.");
      res.redirect("/item" + req.params.id);
    }
  },

  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
