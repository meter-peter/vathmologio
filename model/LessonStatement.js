const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const lessonTeaching = require('../model/LessonTeaching');
const students = require('../model/Student');

const LessonStatementSchema = new Schema({
        lessonTeaching:{
            type:[{type:Schema.Types.ObjectId}],
            ref:'lessonTeaching',
            required:true
        },
        student:{
            type:[{type:Schema.Types.ObjectId}],
            ref:'students',
            required:true
        },

        theory_grade:{
            type:Number,
            required:false
        },
        lab_grade:{
            type:Number,
            required:false
        },
        final_state:{
            type:Boolean,
            required:true
        }




    }
);

module.exports = Lesson = mongoose.model('lessonStatement',LessonStatementSchema);