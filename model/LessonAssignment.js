const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const lessons = require('../model/Lesson');
const teacher = require('../model/Teacher');

const LessonAssignmentSchema = new Schema({
        lesson:{
            type:[{type:Schema.Types.ObjectId}],
            ref:'lessons'
        },
        teacher:{
            type:[{type:Schema.Types.ObjectId}],
            ref:'teachers'
        },

    }
);

module.exports = Lesson = mongoose.model('lessonsAssignment',LessonAssignmentSchema);