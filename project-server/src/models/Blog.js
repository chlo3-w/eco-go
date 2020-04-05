const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        default: ''    
    },
    url: {
        type: String,
        default: ''
    },
    author: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    }
});

mongoose.model('Blog', blogSchema);