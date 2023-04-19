const mongoose = require('mongoose');

const foodSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    expiryDate: {
        type: Date,
        required: true,
    },
    donor: {
        type: ObjectId,
        ref: 'User',
        required: true,
    },
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
