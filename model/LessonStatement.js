const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LessonStatementSchema = new Schema({
        lessonTeaching:{
            type:Schema.Types.ObjectId,
            ref:'lessonTeaching',
            required:true
        },
        student:{
            type:Schema.Types.ObjectId,
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
            required:false
        }




    }
);

module.exports = LessonStatement = mongoose.model('lessonStatements',LessonStatementSchema);