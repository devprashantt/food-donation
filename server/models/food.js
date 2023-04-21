import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
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

const Food = model('Food', foodSchema);

export default Food;
