const mongoose = require('mongoose');

let storeCatagorySchema = new mongoose.Schema({
    catagoryName:  {
        type: String,
        required: true,
        unique: true,
    },
    sortOrder: {
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

module.exports = mongoose.model('storeCatagory', storeCatagorySchema)


