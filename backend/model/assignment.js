const mongoose = require('mongoose')

AssignmentSchema = new mongoose.Schema({
    subject: {
        type: 'string',
        required: true
    },
    student_id: {
        type: 'string',
        required: true
    },
    year:{
        type: 'string',
        required: true
    },
    submission: {
        data: Buffer,
        contentType: 'string'
    }
})

const Assignment = mongoose.model("Assignment",AssignmentSchema)
module.exports = Assignment