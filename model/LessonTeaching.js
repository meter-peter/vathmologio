const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const lessonAssignment = require('../model/LessonAssignment');

const LessonTeachingSchema = new Schema({
        lessonAssignment:{
            type:[{type:Schema.Types.ObjectId}],
            ref:'lessonsAssignments',
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

module.exports = Lesson = mongoose.model('lessonsTeaching',LessonTeachingSchema);