const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonTeaching = new Schema({
        lesson:{
            type:[{type:Schema.Types.ObjectId}],
            ref:'lessons',
            required:true
        },
        year:{
            type:Number,
            required:true
        },

        semester:{
            type:Number,
            required:true
        },
        teacher:{
            type:[{type:Schema.Types.ObjectId}],
            ref:'teacher',
            required:true
        },
        theoryMultiplier:{
            type:Number,
            required:true
        },
        labMultiplier:{
            type:Number,
            required:true
        },
        theoryRestriction:{
            type:Number,
            required:true
        }


    }
);

module.exports = Lesson = mongoose.model('lessonTeaching',LessonTeaching);