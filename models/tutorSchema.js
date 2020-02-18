const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const tutorSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please Firstname is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Please enter Lastname'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please enter Email'],
    unique: true,
    lowercase: true,
    validate: value => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: 'Invalid Email Address' });
      }
    }
  },
  password: {
    type: String,
    required: [true, 'Please enter a Password'],
    minlength: 8,
    trim: true
  },
  confirmPassword: {
    type: String
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

tutorSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    if (user.password !== user.confirmPassword) {
      throw new Error({ error: 'Invalid credentials' });
    }
    user.password = await bcrypt.hash(user.password, 8);
    user.confirmPassword = null;
  }
});
tutorSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ email: user.email }, process.env.JWT_KEY, {
    expiresIn: '30min'
  });
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};
const Tutor = mongoose.model('tutor', tutorSchema);
module.exports = Tutor;
