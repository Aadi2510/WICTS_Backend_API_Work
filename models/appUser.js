const mongoose = require('mongoose');

let appUserShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    phone: {
        type: Number,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    regDate: {
        type: Date,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    totalOrder: {
        type: Number,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    wallet: {
        type: Number,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
},
    {
        timestamps: true
    })

module.exports = mongoose.model('dataAppUser', appUserShema)
