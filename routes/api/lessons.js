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
        

module.exports = router;






