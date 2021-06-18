const express = require('express');
const router = express.Router();
const Lesson = require('../../model/Lesson');
const Teacher = require('../../model/Teacher');
const Student = require('../../model/Student');
const LessonAssignment = require('../../model/LessonAssignment');
const LessonStatement = require('../../model/LessonStatement');
const LessonTeaching = require('../../model/LessonTeaching');

//EMFANISI VATHMOLOGIAS MA8IMATOS !FOITITI!
router.get('/mygrade/:studentID' , async (req,res) =>{

    const grade  = await LessonStatement.findById(req.params.studentID, (err, body) =>{
        if(err){
            res.send(err);
        }
        res.send(body);

    })

})

//EMFANISI VATHMOLOGIWN MA8IMATOS !KA8IGITI!
router.get('/allgrades/:lessonStatementID' , async (req,res) =>{

    const grade  = await LessonStatement.findById(req.params.lessonStatementID, (err, body) =>{
        if(err){
            res.send(err);
        }

        res.send(body);

    })

})


//ANANEWSI TROPOY VA8MOLOGISHS
router.put('/updateLessonTeaching/:lessonTeachingID', async (req, res) =>{
    let {theoryMultiplier, labMultiplier, theoryRestriction} = req.body;/*if needed*/

    const lessonTeaching = await LessonTeaching.findByIdAndUpdate(req.params.lessonTeachingID, req.body, (err, body) =>{
        if(err){
            res.send(err);
        }
        res.send(body);

    }).catch(err=>{
        res.send(err);
    });
    console.log("success");

})
//EISAGWGI NEAS VATHMOLOGIAS
router.put('/updateLessonStatement/:lessonStatementID', async (req, res) =>{
    let {theoryGrade, labGrade} = req.body;

    const lessonStatement = await Lesson.findByIdAndUpdate(req.params.lessonStatementID, req.body, (err, body) =>{
        if(err){
            res.send(err);
        }
        res.send(body);

    }).catch(err=>{
        res.send(err);
    });
    console.log("success");

})

//ORISTIKOPOIHSH VATHMOLOGIAS

router.put('/finalGrade/:lessonStatementID', async (req, res) =>{

    const lessonStatement = await Lesson.findByIdAndUpdate(req.params.lessonStatementID, lessonStatement.final_state=true , (err, body) =>{
        if(err){
            res.send(err);
        }
        res.send(body);

    }).catch(err=>{
        res.send(err);
    });
    console.log("success");

})



module.exports = router;