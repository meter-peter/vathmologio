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

//pairnei ws eisodo ena json body p exei ta stoixeia t mathimatos
// kai an ikanopoiountai oi synthikes ginetai prosthiki tou mathimatos sti vasi
router.post('/new', async (req, res) => {
    var newlesson = new Lesson(req.body);
    console.log(req.body);
    Lesson.findOne({name:newlesson.name})
    .catch(err=>{
        return res.send(err);
    })
    .then(lesson=>{
        if(lesson){
            return res.status(400).json({
                msg: "lesson Already Exists"
            });
        }
    }).catch(err=>{
        return res.send(err)
    });
    
    newlesson.save().then(()=>{
        return res.status(201).json({
            success:true,
            msg:"Successfully added"
        })
    });
  });

//searching for specific lesson
router.get('/search/:_id', async (req, res) =>{
    const lesson = await Lesson.findById(req.params._id);
    if(lesson){
        res.send(lesson);
    }
})

//updating a specific lesson
router.put('/update/:lessonId',async (req, res) =>{
    const lesson= await Lesson.findByIdAndUpdate(req.params.lessonId, (err, body)=>{
        if(err){
            res.send(err);
        }
        res.send(body);
    });
})

//deleting a lesson
router.delete('/delete/:lessonName', async (req, res)=>{
    const lesson = await Lesson.findById(req.params.lessonName);
    if(lesson){
        await lesson.remove();
    }
    return res.send(lesson);
})

//ANA8ESI MA8IMATOS
router.post('/assignment', async (req, res) =>{
    let {lessonName, teacher} = req.body;
    const assignment = new LessonAssignment();

    assignment.lesson= lessonName;
    assignment.teacher= teacher;
    await assignment.save();
})

module.exports = router;






