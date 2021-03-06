const express = require('express');
const router = express.Router();
const Student = require('../../model/Student');



router.post('/addStudent', async (req, res) =>{
    const {am , year_registered,user} = req.body;
    console.log(req.body)
    let newStudent = new Student({
        am,
        year_registered,
        user,
        statements:[]
    });

    newStudent.save();
    User.findByIdAndUpdate(user,{student: newStudent._id},function(err, user) {
        
    })
    console.log(newStudent);
})

//GET A SPECIFIC STUDENT
router.get('/getStudent/:studentID', async (req, res)=>{
    let student = await Student.findById(req.params.lessonID).catch((err) =>{
        if(err){
            res.send(err);
        }
    });
    if(student){
        console.log(student);
        res.send(student);
    }
})



router.get('/getStudents', async (req,res) =>{
    console.log("I got here")
    await Student.find({},(err, students)=>{
        console.log("I got here")
        res.send(students);
    });

})




module.exports = router;