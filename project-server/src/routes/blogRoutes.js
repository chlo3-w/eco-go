const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Blog = mongoose.model('Blog');

const router = express.Router();

router.use(requireAuth);

router.get('/posts', async (req, res) => {
    const posts = await Blog.find({});
    res.send(posts);
});

router.post('/posts', async (req, res) => {
    const { title, url, author, category} = req.body;
    const posts = new Blog({title,url,author,category});
    await posts.save();
    res.send(posts);
});

module.exports = router;