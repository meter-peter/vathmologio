const express = require('express');
const router = express.Router();
const Lesson = require('../../model/Lesson');
const Teacher = require('../../model/Teacher');
const Student = require('../../model/Student');
const LessonAssignment = require('../../model/LessonAssignment');
const LessonStatement = require('../../model/LessonStatement');
const LessonTeaching = require('../../model/LessonTeaching');


router.post('/addStudent', async (req, res) =>{
    const {am , year_registered,user} = req.body;
    let newStudent = new Student({
        am,
        year_registered,
        user
    });

    newStudent.save().then(()=>{
        return res.status(201).json({
            success: true,
            msg: "Student is now registered."
        });
    });
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