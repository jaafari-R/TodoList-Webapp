const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String},
    checked: {type: Boolean, default: false},
    pinned: {type: Boolean, default: false}
});

module.exports = mongoose.model('Task', taskSchema)