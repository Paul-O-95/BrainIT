const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the quizApp of hiit using the router page page ....');
});
router.get('/test', (req, res) => {
  res.send('Holla hola');
});

module.exports = router;
