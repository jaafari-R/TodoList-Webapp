const express = require('express');
const Contoller = require('../contoller/todolist')

const router = express.Router();

router.get('/get', Contoller.getTasks);
router.get('/get/:_id', Contoller.getTask);

router.post('/add', Contoller.addTask);

router.put('/update/:_id', Contoller.updateTask);

router.delete('/delete/:_id', Contoller.deleteTask);

router.put('/mark/:_id', Contoller.markTask);

router.put('/pin/:_id', Contoller.pinTask);

module.exports = router;