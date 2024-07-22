const mongoose = require('mongoose');

let bannerShema = new mongoose.Schema({
    bannerType:  {
        type: String,
        required: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    bannerOrder: {
        type: Number,
        required: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    bannerLinkID: {
        type: Number,
        required: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    bannerLink: {
        type: String,
        required: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    image: String,
},
{
    timestamps: true
})

module.exports = mongoose.model('userBannerData', bannerShema)
