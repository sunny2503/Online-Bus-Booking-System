const mongoose = require('mongoose');

const BusServiceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    boarding: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    totalSeats: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    bookedSeats: {
        type: [String],
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BusOwner'
    }
});

module.exports = mongoose.model('BusService', BusServiceSchema);