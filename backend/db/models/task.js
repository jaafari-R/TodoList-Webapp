const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    marked: {type: Boolean, default: false},
    pinned: {type: Boolean, default: false}
});

module.exports = mongoose.model('Task', taskSchema);