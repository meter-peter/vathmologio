const express = require('express');
const router = express.Router();
const Lesson = require('../../model/Lesson');

//epistrefei array olwn twn mathimatwn

router.get('/', async (req, res) => {
    const users = await Lesson.find({});
    res.json(users);
    
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
router.get('/search/:lessonName', async (req, res) =>{
    const lesson = await Lesson.findById(req.params.lessonName);
    if(lesson){
        res.send(lesson);
    }
})
//updating a specific lesson
router.put('/update/:lessonName',async (req, res) =>{
    Lesson.findByIdAndUpdate(req.params.lessonName, (err, body)=>{
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



module.exports = router;






