const express = require('express');
const router = express.Router();
const Lesson = require('../../model/Lesson');
const Teacher = require('../../model/Teacher');
const Student = require('../../model/Student');
const LessonAssignment = require('../../model/LessonAssignment');
const LessonStatement = require('../../model/LessonStatement');
const LessonTeaching = require('../../model/LessonTeaching');
const User = require('../../model/User');
router.post('/addTeacher', async (req, res) => {



        let newTeacher = new Teacher({
            teacherRank: 0,
            lessonsTeaching:[],
            user:req.body.user
         
        });
       
        newTeacher.save();

    User.findByIdAndUpdate(newTeacher.user,{teacher: newTeacher._id},function(err, user) {
        
          })
        console.log()
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