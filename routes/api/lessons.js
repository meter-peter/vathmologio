const express = require('express');
const router = express.Router();
const Lesson = require('../../model/Lesson');
const Teacher = require('../../model/Teacher');
const Student = require('../../model/Student');

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

router.get('/getLessonTeachings', async (req,res) =>{
    console.log("I got here debug 1")
        LessonTeaching.find({}).populate("lesson").
        exec(function (err, lessonTeachings) {
          if (err) return handleError(err);
        
          res.send(lessonTeachings);
        });;
        console.log("I got here debug 2")
        
    })

router.get('/getLessonStatementbyStudent/:studentID', async (req,res) =>{

    console.log("I got here debug 1")
    await LessonStatement.find({student:req.params.studentID},(err, lessonStatements)=>{
        console.log("I got here debug 2")
        console.log(lessonStatements)
        res.send(lessonStatements);

    }).catch((err)=>{res.send(err)});
})

router.get('/getLessonStatementbyTeacher/:lessonTeachingID', async (req,res) =>{

    console.log("I got here debug 1")
    await LessonStatement.find({lessonTeaching:req.params.lessonTeachingID},(err, lessonStatements)=>{
        console.log("I got here debug 2")
        console.log(lessonStatements)
        res.send(lessonStatements);

    }).catch((err)=>{res.send(err)});
})

router.get('/getLessonStatement', async (req,res) =>{
    console.log("I got here debug 1")
    await LessonStatement.find({},(err, lessonStatements)=>{
        console.log("I got here debug 2")
        res.send(lessonStatements);
    });
})



router.post('/addLessonTeaching', async (req, res) =>{
    const {lessonID , teacherID} = req.body;
        console.log(req.body)
        let newLessonTeaching = new LessonTeaching({
            lesson:lessonID,
            teacher:teacherID

        });

            newLessonTeaching.save().then(()=>{

            Teacher.findByIdAndUpdate(newLessonTeaching.teacher,{lessonTeaching: newLessonTeaching._id},function(err, user) {
        
            })
        }).catch((err)=>{
            res.send(err);
        });
        console.log(newLessonTeaching);

})

router.post('/addLessonStatement', async (req, res) =>{
    console.log(req.body)
    const {studentID, lessonTeachings} = req.body;
    let lessonStatementList = [];
    let i=0;
    for(i in lessonTeachings){
        let newLessonStatement = new LessonStatement({
            student:studentID,
            lessonTeaching:lessonTeachings[i]
        });

        newLessonStatement.save();
        console.log(newLessonStatement)
      
    }
    
    console.log(lessonStatementList);
    let student = Student.findByIdAndUpdate({studentID}, {statements:lessonStatementList}).catch((err)=>{res.send(err)});
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






