const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    bus: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BusService'
    },
    seats: {
        type: [String],
        required: true
    },
    status: {
        type: String,
        default: 'Paid'
    },
    departureDate: {
        type: Date,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Booking', BookingSchema);