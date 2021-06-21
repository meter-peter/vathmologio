const express = require('express');
const router = express.Router();
const Lesson = require('../../model/Lesson');
const Teacher = require('../../model/Teacher');
const Student = require('../../model/Student');
const LessonAssignment = require('../../model/LessonAssignment');
const LessonStatement = require('../../model/LessonStatement');
const LessonTeaching = require('../../model/LessonTeaching');

router.post('/addStudent', async (req, res) =>{
    const {am , year_registered} = req.body;
    let newStudent = new Student({
        am,
        year_registered
    });

    newStudent.save().then(()=>{
        return res.status(201).json({
            success: true,
            msg: "Student is now registered."
        });
    });
    console.log(newStudent);
})

router.get('/getStudents', async (req,res) =>{
    console.log("I got here")
    await Student.find({},(err, students)=>{
        console.log("I got here")
        res.send(students);
    });

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

router.get('/getLessons', async (req,res) =>{
    console.log("I got here")
    await Lesson.find({},(err, lessons)=>{
        console.log("I got here")
        res.send(lessons);
    });

})

router.post('/addTeacher', async (req, res) =>{
    const {teacherRank , lessonsTeaching} = req.body;
    let allLessons = []
    let i;
    for(i in lessonsTeaching){
        await Lesson.findById(i, (err, lesson)=>{
            allLessons.push(lesson);
        })
    }

    let newTeacher = new Teacher({
        teacherRank,
        allLessons
    });

    newTeacher.save().then(()=>{
        return res.status(201).json({
            success: true,
            msg: "Teacher is now registered."
        });
    });
    console.log(newTeacher);
})

router.post('/addLessonAssignment', async (req, res) =>{
    const {lesson , teacher} = req.body;
    await Lesson.findById(lesson, (err, newLesson) =>{
        Teacher.findById(teacher, (err, newTeacher) =>{
            let newAssignment = new LessonAssignment({
                newLesson,
                newTeacher
            });

            newAssignment.save().then(()=>{
                return res.status(201).json({
                    success: true,
                    msg: "Assignment is now registered."
                });
            });
            console.log(newAssignment);
        })
    })

})
router.get('/getLessonAssignment', async (req,res) =>{
    console.log("I got here")
    await LessonAssignment.find({},(err, lessonAssignments)=>{
        console.log("I got here")
        res.send(lessonAssignments);
    });
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

router.get('/getLessonTeaching', async (req,res) =>{
    console.log("I got here debug 1")
    await LessonTeaching.find({},(err, lessonTeachings)=>{
        console.log("I got here debug 2")
        res.send(lessonTeachings);
    });
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

router.get('/getLessonStatement', async (req,res) =>{
    console.log("I got here debug 1")
    await LessonStatement.find({},(err, lessonStatements)=>{
        console.log("I got here debug 2")
        res.send(lessonStatements);
    });
})
module.exports = router;