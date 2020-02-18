const TutorSchema = require('../../models/tutorSchema.js');

module.exports = {
  index(req, res) {
    const viewModel = {};

    res.render('profile', viewModel);
  },

  retrieve(req, res) { },

  update(req, res) { },

  getEmail(req, res) { },

  delete(req, res) { }
};
