const mongoose = require('mongoose');

// Create a new Mongoose connection
mongoose.connect('mongodb://localhost/food-donation-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

    // These options are required to avoid deprecation warnings
    useCreateIndex: true,
});

// Define the Mongoose schema and models
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
