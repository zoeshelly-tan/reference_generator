const db = require("../models");

// Defining methods for the booksController
module.exports = {
    create: function(req, res) {
        db.Reference.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
 
  remove: function(req, res) {
    db.Reference
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
