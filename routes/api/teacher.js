const express = require('express');
const router = express.Router();
const Lesson = require('../../model/Lesson');
const Teacher = require('../../model/Teacher');
const Student = require('../../model/Student');
const LessonAssignment = require('../../model/LessonAssignment');
const LessonStatement = require('../../model/LessonStatement');
const LessonTeaching = require('../../model/LessonTeaching');

router.post('/addTeacher', async (req, res) => {
    const {teacherRank, lessonsTeaching, user} = req.body;
    let allLessons = []
    console.log(lessonsTeaching);

        let newTeacher = new Teacher({
            teacherRank,
            lessonsTeaching,
            user
        })

        await newTeacher.save().then(() => {
            return res.status(201).json({
                success: true,
                msg: "Teacher is now registered."
            });
        });
        console.log(newTeacher)

})

router.get('/getTeachers', async (req, res)=>{
    await Teacher.find({},(err, lessons)=>{
        res.send(lessons);
    });
})

router.put('/updateTeacher/:teacherID', async (req, res) =>{
    let {teacherRank, lessonsTeaching ,user} = req.body;
    await Teacher.findByIdAndUpdate(req.params.teacherID, {
        teacherRank,
        lessonsTeaching,
        user
    }).catch((err)=>{
        res.send(err);
    })
    return res.status(201).json({
        success: true,
        msg: "Teacher is now updated."
    });
})

router.put('/deleteTeacher/:teacherID', async (req,res)=>{
    await Teacher.findByIdAndDelete(req.params.teacherID).then((body)=>{
        return res.status(201).json({
            success: true,
            msg: "Teacher is now Deleted."
        })
    }).catch((err)=>{
        res.send(err);
    })
})

module.exports = router;