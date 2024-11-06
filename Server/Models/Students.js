const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    subjects: [{
        subjectName: String
    }]
});

let Students = new mongoose.model("Students", studentsSchema);

module.exports = Students;