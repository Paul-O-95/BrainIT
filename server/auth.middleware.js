const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const Tutor = mongoose.model('tutor');

const isAuthenticated = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer', '');
  const data = jwt.verify(token, process.env.JWT_KEY);
  try {
    const tutor = await Tutor.findOne({ _id: data._id, 'tokens.token': token });
    if (!tutor) {
      throw new Error();
    }
    req.tutor = tutor;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Not authorized to access this resource' });
  }
};

module.exports = isAuthenticated;
