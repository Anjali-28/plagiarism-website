const express=require('express');
const userRoutes=require('./api/user_routes');
const assgnRoutes=require('./api/assignment_routes');
const router=express.Router();

// router.get('/',(req,res)=>{
//     res.send("Welcome to Plagiarism Detective");
//     console.log("Hello");
// })

router.use(userRoutes)
router.use(assgnRoutes)

module.exports = router;