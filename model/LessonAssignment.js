const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const lessons = require('../model/Lesson');
const teacher = require('../model/Teacher');

const LessonAssignmentSchema = new Schema({
        lesson:{
            type:Schema.Types.ObjectId,
            ref:'lessons'
        },
        teacher:{
            type:Schema.Types.ObjectId,
            ref:'teachers'
        },
        statements:{
            type:[{type:Schema.Types.ObjectId}],
            ref:'lessonStatements'
        }

    }
);

module.exports = LessonAssignment = mongoose.model('lessonsAssignments',LessonAssignmentSchema);