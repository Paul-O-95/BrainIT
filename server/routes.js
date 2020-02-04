import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the quizApp of hiit using the router page page ....');
});

export default router;