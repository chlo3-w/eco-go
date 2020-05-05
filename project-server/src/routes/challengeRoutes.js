const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Challenge = mongoose.model('Challenge');

const router = express.Router();

router.use(requireAuth);

router.get('/challenges', async (req, res) => {
    const challenges = await Challenge.find({});
    res.send(challenges);
});

router.post('/challenges', async (req, res) => {
    const { name, description, week, carbon, water, trees, bottles, eScore, category, image} = req.body;

    const challenge = new Challenge({name,description,week,carbon,water,trees,bottles,eScore,category,image});
    await challenge.save();
    res.send(challenge);
});





module.exports = router;