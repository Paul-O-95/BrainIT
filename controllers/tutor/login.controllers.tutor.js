const TutorSchema = require('../../models/tutorSchema');

module.exports = {
  signin: async (req, res) => {
    res.send('login');
  },
  signup: async (req, res) => {
    const result = await TutorSchema.find();
    res.json({
      result
    });
  },

  register: async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    const tutor = await TutorSchema.create({
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    });
    const token = await tutor.generateAuthToken();
    res.json({
      tutor,
      token
    });
  }
};
