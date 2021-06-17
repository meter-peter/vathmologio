const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
            required:true
        },
        lab_grade:{
            type:Number,
            required:true
        },



    }
);

module.exports = Lesson = mongoose.model('lessonStatement',LessonStatementSchema);