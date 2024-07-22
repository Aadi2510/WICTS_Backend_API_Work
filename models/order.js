const mongoose = require('mongoose');

let orderShema = new mongoose.Schema({
    orderID: {
        type: Number,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    store: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    user: {
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
    address: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    totalAmount: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
},
    {
        timestamps: true
    })

module.exports = mongoose.model('orderData', orderShema)
