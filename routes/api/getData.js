const express = require('express');
const router = express.Router();
const Lesson = require('../../model/Lesson');
const Teacher = require('../../model/Teacher');
const Student = require('../../model/Student');
const LessonAssignment = require('../../model/LessonAssignment');
const LessonStatement = require('../../model/LessonStatement');
const LessonTeaching = require('../../model/LessonTeaching');



//GET A SPECIFIC LESSON
router.get('/getLesson/:lessonID' , async (req, res) =>{
    let lesson = await Lesson.findById(req.params.lessonID).catch((err) =>{
        if(err){
            res.send(err);
        }
    });
    if(lesson){
        console.log(lesson);
        res.send(lesson);
    }
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

//GET A SPECIFIC LESSON_TEACHING
router.get('/getLessonTeaching/:lessonTeachingID', async (req, res)=>{
    let lessonTeachingID = await LessonTeaching.findById(req.params.lessonTeachingID).catch((err) =>{
        if(err){
            res.send(err);
        }
    });
    if(lessonTeachingID){
        console.log(lessonTeachingID);
        res.send(lessonTeachingID);
    }
})

//GET A SPECIFIC LESSON_STATEMENT
router.get('/getLessonStatement/:lessonStatementID', async (req, res)=>{
    let lessonStatementID = await LessonStatement.findById(req.params.lessonStatementID).catch((err) =>{
        if(err){
            res.send(err);
        }
    });
    if(lessonStatementID){
        console.log(lessonStatementID);
        res.send(lessonStatementID);
    }
})
//GET A SPECIFIC LESSON ASSIGNMENT
router.get('/getLessonAssignment/:lessonAssignmentID', async (req, res)=>{
    let lessonAssignmentID = await LessonAssignment.findById(req.params.lessonAssignmentID).catch((err) =>{
        if(err){
            res.send(err);
        }
    });
    if(lessonAssignmentID){
        console.log(lessonAssignmentID);
        res.send(lessonAssignmentID);
    }
})

router.get('/getStudents', async (req,res) =>{
    console.log("I got here")
    await Student.find({},(err, students)=>{
        console.log("I got here")
        res.send(students);
    });

})


router.get('/getLessons', async (req,res) =>{
    console.log("I got here")
    await Lesson.find({},(err, lessons)=>{
        console.log("I got here")
        res.send(lessons);
    });
})

router.get('/getLessonAssignment', async (req,res) =>{
    console.log("I got here")
    await LessonAssignment.find({},(err, lessonAssignments)=>{
        console.log("I got here")
        res.send(lessonAssignments);
    });
})


router.get('/getLessonTeaching', async (req,res) =>{
    console.log("I got here debug 1")
    await LessonTeaching.find({},(err, lessonTeachings)=>{
        console.log("I got here debug 2")
        res.send(lessonTeachings);
    });
})

router.get('/getLessonStatement', async (req,res) =>{
    console.log("I got here debug 1")
    await LessonStatement.find({},(err, lessonStatements)=>{
        console.log("I got here debug 2")
        res.send(lessonStatements);
    });
})

module.exports = router;