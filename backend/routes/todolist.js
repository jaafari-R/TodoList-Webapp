const express = require('express');
const Contoller = require('../contoller/todolist')

const router = express.Router();

router.get('get/', Contoller.getTasks);
router.get('get/:id', Contoller.getTask);

router.post('/add', Contoller.addTask);

router.post('/update/:id', Contoller.updateTask);

router.delete('/delete/:id', Contoller.deleteTask);

router.post('/chack/:id', Contoller.checkTask);
router.post('/unchack/:id', Contoller.unCheckTask);

router.post('/pin/:id', Contoller.pinTask);
router.post('/unpin/:id', Contoller.unPinTask);

module.exports = router;