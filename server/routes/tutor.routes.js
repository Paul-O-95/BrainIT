const passport = require('passport');
const express = require('express');
const index = require('../../controllers/tutor/index.controllers.tutor.js');
const login = require('../../controllers/tutor/login.controllers.tutor.js');
const profile = require('../../controllers/tutor/profile.controllers.tutor.js');
const isLogged = require('../isLogged');
const auth = require('../auth.middleware');

const router = express.Router();

// Get routes
router.get('/', auth, login.signin);
router.get('/logged', isLogged, index.home);
router.get('/profile/:id', isLogged, profile.retrieve);

// Update Routes
router.put('/update/:id', profile.update);

// Post Routes
router.post('/signup', login.register);

router.post(
  '/signin',
  passport.authenticate('local-login', {
    successRedirect: '/logged',
    failureRedirect: '/',
    failureFlash: true
  })
);

// Delete Routes
router.delete('/accountdelete/:email', profile.delete);

module.exports = router;
