const express = require('express');
const router = express.Router();
const Lesson = require('../../model/Lesson');
const Teacher = require('../../model/Teacher');
const Student = require('../../model/Student');
const LessonAssignment = require('../../model/LessonAssignment');
const LessonStatement = require('../../model/LessonStatement');
const LessonTeaching = require('../../model/LessonTeaching');

//epistrefei array olwn twn mathimatwn

router.get('/', async (req, res) => {
    const lessons = await Lesson.find({}).catch(err=>{
        return res.send(err)
    });
    return res.send(lessons)
    
    
    });
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

router.post('/addLessonAssignment', async (req, res) =>{
    const {lesson , teacher} = req.body;

    let newAssignment = new LessonAssignment({
        lesson,
        teacher
    })

    console.log(newAssignment);
    newAssignment.save().then(()=> {
        return res.status(201).json({
            success: true,
            msg: "Assignment is now registered."
        })
    })
})


router.post('/addLessonTeaching', async (req, res) =>{
    const {lessonAssignment , year, semester, theoryMultiplier, labMultiplier, theoryRestriction} = req.body;
    await LessonTeaching.findById(lessonAssignment, (err, newLessonAssignment) =>{
        let newLessonTeaching = new LessonTeaching({
            newLessonAssignment,
            year,
            semester,
            theoryMultiplier,
            labMultiplier,
            theoryRestriction
        });

        newLessonTeaching.save().then(()=>{
            return res.status(201).json({
                success: true,
                msg: "LessonTeaching is now registered."
            });
        });
        console.log(newLessonTeaching);
    })

})

router.post('/addLessonStatement', async (req, res) =>{
    const {lessonTeaching , student, theory_grade, lab_grade, final_state} = req.body;

    await LessonTeaching.findById(lessonTeaching, (err, newLessonTeaching) =>{
        Student.findById(student, (err, newStudent) =>{

            let newLessonStatement = new LessonStatement({
                newLessonTeaching,
                newStudent,
                theory_grade,
                lab_grade,
                final_state
            });

            newLessonStatement.save().then(()=>{
                return res.status(201).json({
                    success: true,
                    msg: "LessonStatement is now registered."
                });
            });
            console.log(newLessonStatement);
        })

    })


})

router.post('/addLesson', async (req, res) =>{
    const {name , desc, requires} = req.body;
    let requiredLesson = await Lesson.findById(requires)
    let newLesson = new Lesson({
        name,
        desc,
        requiredLesson
    });

    newLesson.save().then(()=>{
        return res.status(201).json({
            success: true,
            msg: "Lesson is now registered."
        });
    });
    console.log(newLesson);
})


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

module.exports = router;






