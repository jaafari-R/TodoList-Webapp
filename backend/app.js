const express = require('express');
const connectDB = require('./db/connect');
require('dotenv').config();

const todolistRouter = require('./routes/todolist');

const PORT = 5000;

const app = express();

// Middleware
app.use(express.json())

// routers
app.use('/api/v1/todolist/', todolistRouter);

// Main function
const main = async() => {
    try {
        // Connect to DB
        await connectDB(process.env.DB_URL);
        // Start App/Server
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    }
    catch (err){
        console.log(err);
    }
}

main();