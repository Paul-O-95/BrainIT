let index = require('../controllers(admin)/index');
let login = require('../controllers(admin)/login');
let profile = require('../controllers(admin)/profile');
let passport = require('passport');
let isLogged = require('./isLogged');

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('Welcome to the quizApp of hiit using the router page page ....');
});
router.get('/test', (req, res) => {
  res.send('Holla hola');
});

router.get('/signin' , login.signin);
router.get('/signup' , login.signup);
router.get('/logged' , isLogged , index.home);
router.get('/profile' , isLogged , profile.index);
router.get('/profile/:user_id' , profile.retrieve);
router.get('/profile/:user_email' , profile.getEmail);

router.put('/update/:user_id' , profile.update);

router.post('/signup' , login.register);
router.post('/signin', passport.authenticate('local-login' , {
  'successRedirect' : '/logged',
  'failureRedirect': '/',
  'failureFlash':true
}));

router.delete('/accountdelete/user_email' , profile.delete)





module.exports = router;
