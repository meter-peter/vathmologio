const express = require('express');
const router = express.Router();

const Lesson = require("../../model/Lesson");
const Teacher = require('../../model/Teacher');


router.post('/addLessonAssignment', async (req, res) =>{
    const {lessonid , teacherid} = req.body;

    const lesson = await Lesson.findById(lessonid).catch(error);
    const teacher = await Teacher.findbyId(teacherid).catch(error);

    const newAssignment = {lesson:lesson,teacher:teacher}
    console.log(newAssignment);
    newAssignment.save().then(()=> {
        return res.status(201).json({
            success: true,
            msg: "Assignment is now registered."
        })
    })
})


router.get('/getTeacherAssignments/:teacherid', async (req,res) =>{
    console.log("I got here")
    await LessonAssignment.find({'teacher._id':req.params.teacherid},(err, lessonAssignments)=>{
        console.log("I got here")
        res.send(lessonAssignments);
    });
})

module.exports=router;