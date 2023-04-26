const express = require('express');
const Contoller = require('../contoller/todolist')

const router = express.Router();

router.get('/get', Contoller.getTasks);
router.get('/get/:id', Contoller.getTask);

router.post('/add', Contoller.addTask);

router.put('/update/:id', Contoller.updateTask);

router.delete('/delete/:id', Contoller.deleteTask);

router.post('/check/:id', Contoller.checkTask);

router.post('/pin/:id', Contoller.pinTask);

module.exports = router;