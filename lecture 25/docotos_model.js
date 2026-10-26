const mongoose = require('mongoose');
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    yearsOfExperience: {
        type: Number,
        required: true
    },
    fees: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    }
});

module.exports = doctorSchema;