const mongoose = require('mongoose');

const connectDB = (dbURL) => {
    return mongoose
    .connect(dbURL)
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch((err) => console.log("Failed to connect to MongoDB\n", err));
}

module.exports = connectDB