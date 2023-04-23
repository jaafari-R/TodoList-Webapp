const mongoose = require('mongoose');

const DB_URL = "mongodb://localhost/todolist";

const connectDB = () => {
    return mongoose
    .connect(DB_URL)
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch((err) => console.log("Failed to connect to MongoDB\n", err));
}

module.exports = connectDB