const express = require('express');
const connectDB = require('./db/connect');
require('dotenv').config();

const todolistRouter = require('./routes/todolist');

const app = express();

// Middleware
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    next();
  });

// routers
app.use('/api/v1/todolist/', todolistRouter);

// Main function
const main = async() => {
    try {
        // Connect to DB
        await connectDB(process.env.DB_URL);
        // Start App/Server
        app.listen(Number(process.env.PORT), () => {
            console.log(`Server is listening on port ${process.env.PORT}`);
        });
    }
    catch (err){
        console.log(err);
    }
}

main();