const db = require("../models");

// Defining methods for the rowsController
module.exports = {
  findAll: function(req, res) {
    db.Row
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByDate: function(req, res) {
    const {week, year} = req.params
    db.Row
      .findOne({week: week, year: year})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Row
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateWeek: function(req, res) {
    // console.log('inside rowcontroller updateweek')
    // console.log(req.body.rows)
    db.Row
      .findOneAndUpdate({ 
        _id: req.body._id
      }, req.body)
      .then(dbModel => res.json(dbModel))
      // .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
