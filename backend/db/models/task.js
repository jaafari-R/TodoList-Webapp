const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    description: {type: String}
});

module.exports = mongoose.model('Task', taskSchema)