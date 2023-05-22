const express = require('express')
const assgnRoutes = express.Router()
const multer = require('multer')
// const Assignment = require('../../model/assignment')
const { Student, Assignment }=require('../../model/models')

//storage forthe image reeceived
const Storage=multer.diskStorage({
    destination: 'submissionUploads',
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
});

const upload=multer({
    storage: Storage
}).single('submission')

assgnRoutes.get('/api/test', (req, res)=>{
    console.log('Tstinggg');
    res.send('Assignment db teesttt')
})

assgnRoutes.post('/api/upload', (req, res)=>{
    upload(req, res, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            // Assignment.create(req.body)
            const newImage=new Assignment({
                subject: req.body.subject,
                student_id: req.body.student_id,
                year: req.body.year,
                submission: {
                    data: req.file.filename,
                    contentType: 'image/png'
                }
            })
            newImage.save()
            .then(()=>res.send("Succesfully image uploaded"))
            .catch((err)=>console.log(err))
        }
    })
})

module.exports = assgnRoutes