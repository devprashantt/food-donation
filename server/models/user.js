const mongoose = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    donatedFood: [{
        type: ObjectId,
        ref: 'Food',
    }],
});

const User = mongoose.model('User', userSchema);
