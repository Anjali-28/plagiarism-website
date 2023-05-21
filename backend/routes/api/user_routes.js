const express = require('express')
const userRoutes = express.Router()
const { Student, Assignment }=require('../../model/models.js')
// const Student=require('../../model/student.js');

userRoutes.get('/test', (req,res)=>{
    res.send("Testinggggg")
})
userRoutes.get('/', (req,res)=>{
    Student.find().then(student=>res.json(student)).catch(err => res.status(404).json({err: "No students found"}));
});
userRoutes.get('/:id', (req,res)=>{
    Student.findById(req.params.id)
    .then(student=>res.json(student))
    .catch(err => res.status(404).json({err: "No students found"}));
});

userRoutes.get('/api/login', (req, res)=>{
    Student.find({"email": req.body.email}, {"password": 1, _id: 0})
    .then(student=>{
        console.log(student[0].password);
        if(student[0].password == req.body.password){
        res.send({msg: "Login Successful!", isLoggedIn: true});
        }
        else{
            res.send({msg: "Login Failed! Wrong email/password", isLoggedIn: false})
        }
        })
    .catch(err => res.status(404).json({err: "No corresponding email/passwor"}));
})

userRoutes.post('/api/signup', (req,res)=>{
    console.log(req);
    Student.create(req.body)
    .then(student=>res.json({msg: "Student Profiile created succesfully"}))
    .catch(err => res.status(400).json({msg:"Unable to add student details"}));
});

module.exports = userRoutes