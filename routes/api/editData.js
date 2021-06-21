const express = require('express');
const router = express.Router();
const Lesson = require('../../model/Lesson');
const Teacher = require('../../model/Teacher');
const Student = require('../../model/Student');
const LessonAssignment = require('../../model/LessonAssignment');
const LessonStatement = require('../../model/LessonStatement');
const LessonTeaching = require('../../model/LessonTeaching');

//updating a specific lesson
router.put('/updateLesson/:lessonId',async (req, res) =>{
    const {name, desc, requiredLesson} = req.body;
    const lesson= await Lesson.findByIdAndUpdate(req.params.lessonId, {
        name,
        desc,
        requiredLesson
    }).catch((err)=>{
        if(err){
            res.send(err);
        }
    })
    return res.status(201).json({
        success: true,
        msg: "Lesson is now updated."
    });

})

//deleting a lesson
router.delete('/deleteLesson/:lessonName', async (req, res)=>{
    const lesson = await Lesson.findById(req.params.lessonName);
    if(lesson){
        await lesson.remove();
    }
    return res.send(lesson);
})


module.exports = router;