const mongoose = require('mongoose');

StudentSchema = new mongoose.Schema({
    fullName: {
        type: 'string',
        required: true
    },
    className:{
        type: 'string',
        required: true
    },
    Rollno: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    student_id: {
        type: 'string',
        required: true
    },
    year: {
        type: 'string'
    } 
});

const Student=mongoose.model("Student", StudentSchema);
module.exports=Student