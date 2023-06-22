const mongoose = require('mongoose');


const healthSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    temperature: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    number: {
        type: String,
        required: true,
        trim: true
    },

}, { timestamps: true });

module.exports = mongoose.model('health', healthSchema);