const express = require('express');
const xlsx = require("xlsx");
const router = express.Router();
const LessonAssignment = require('../../model/LessonAssignment');
const LessonStatement = require('../../model/LessonStatement');
const LessonTeaching = require('../../model/LessonTeaching');
const Student = require('../../model/Student');
const Lesson = require('../../model/Lesson');


//UPDATE GRADES WITH EXCEL FILE !!
router.post('/excelFile' , async (req,res) =>{
    const excelPathName = req.body.pathname;
    console.log(excelPathName);
    const wb = xlsx.readFile(excelPathName);
    const worksheet = wb.Sheets["students_grades"];
    let i=0;
    let posts = [];
    let post = {};

    for (let cell in worksheet) {
        const cellAsString = cell.toString();

        if (cellAsString[1] !== 'r' && cellAsString[1] !== 'm' && cellAsString[1] > 1) {
            if (cellAsString[0] === 'A') {
                post.AM = worksheet[cell].v;
            }
            if (cellAsString[0] === 'B') {
                post.theory_grade = worksheet[cell].v;
            }
            if (cellAsString[0] === 'C') {
                post.lab_grade = worksheet[cell].v;
                posts.push(post);
                post = {};
            }
        }
    }
    for(i in posts){
        const student = await Student.findOne({AM:posts[i].AM}).then( (err, student) =>{
            if(err){
                res.send(err);
            }else if(student){
                console.log('I found a student : ',student);
                const lessonStatement = LessonStatement.findOne({Student: student}).then((err, lessonStatement) =>{
                    if(err){
                        res.send(err);
                    }else if(lessonStatement){
                        lessonStatement.theory_grade= posts[i].theory_grade;
                        lessonStatement.lab_grade= posts[i].lab_grade;
                        lessonStatement.save();
                        console.log('ADDED');
                        //petran check
                        res.send(201).json({
                            success:true,
                            msg:"Successfully added"
                        })
                    }

                })

            }
        })
    }
    console.log(posts[0].AM);
})

//EXPORT STUDENT GRADES IN EXCEL FILE
router.post('exportExcelFile', async (req, res) =>{
    const lessonName = req.body.lessonName;
    const workSheetName = req.body.worksheetName;
    const excelPathName = req.body.pathname;
    console.log(excelPathName);

    let data = [];
    const workSheetColumnName = [
        "AM",
        "Theory_Grade",
        "Lab_grade"
    ]

    const lesson = await Lesson.findOne({lesson:lessonName}).then( (err,lesson)=>{
        if(err){
            res.send(err);
        }else if(lesson){
            const lessonAssignment = LessonAssignment.findOne({lesson:lesson}).then((err, lessonAssignment) =>{
                if(err){
                    res.send(err);
                }else if(lessonAssignment){
                    const lessonTeaching = LessonTeaching.findOne({lessonAssignment:lessonAssignment}).then((err, lessonTeaching) =>{
                        if(err){
                            res.send(err);
                        }else if(lessonTeaching){
                            const lessonStatement = LessonStatement.find({lessonTeaching:lessonTeaching}).then((err, lessonStatement) =>{
                                if(err){
                                    res.send(err);
                                }else if(lessonStatement){

                                    let i=0;
                                    while(i < lessonStatement.length) {
                                        let current = {
                                            AM: lessonStatement[i].AM,
                                            theory_grade: lessonStatement[i].theory_grade,
                                            lab_grade: lessonStatement[i].lab_grade
                                        }

                                        data.push(current);
                                        i = i + 1;
                                    }
                                }
                            })
                        }
                    })
                }
            })
        }

    })

    const exportExcel = (data, workSheetColumnNames, workSheetName, filePath) => {
        const workBook = xlsx.utils.book_new();
        const workSheetData = [
            workSheetColumnNames,
            ... data
        ];
        const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
        xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
        xlsx.writeFile(workBook, filePath);
    }

    const exportUsersToExcel = (data2, workSheetColumnNames, workSheetName, filePath) => {
        const data = data2.map(user => {
            return [data2.AM, data2.theory_grade, data2.lab_grade];
        });
        exportExcel(data, workSheetColumnNames, workSheetName, filePath);
    }

    exportUsersToExcel(data, workSheetColumnName, workSheetName, excelPathName);


})




module.exports = router;