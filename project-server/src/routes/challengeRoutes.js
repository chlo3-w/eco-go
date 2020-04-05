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
    const { name, description, carbon, water, eScore, category,image} = req.body;

    // if (!name || !description) {
    //     return res
    //     .status(422)
    //     .send({error: 'You must provide a name and description'});
    // }

    const challenge = new Challenge({name,description,carbon,water,eScore,category,image});
    await challenge.save();
    res.send(challenge);
});





module.exports = router;