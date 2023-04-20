const express = require('express');

const todolistRouter = require('./routes/todolist');

const PORT = 5000;

const app = express();

// routers
app.use('/api/v1/todolist/', todolistRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});