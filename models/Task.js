const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 chars'],
    },
    completed:{
        type: Boolean,
        default: false,
    },
    difficulty:{
        type: String,
        default: "Easy",
    },
    finish_time:{
        type: Number,
        default: 0,
    }
})

module.exports = mongoose.model('Task', TaskSchema)