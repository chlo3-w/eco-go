const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''    
    },
    description: {
        type: String,
        default: ''
    },
    carbon: {
        type: Number,
        default: ''
    },
    water: {
        type: Number,
        default: ''
    },
    eScore: {
        type: Number,
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

mongoose.model('Challenge', challengeSchema);