const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
        teacherRank:{
            type:Number
        },

        lessonTeaching:{
            type:Schema.Types.ObjectId,
            ref:'lessons'
        },
        user:{
            type:Schema.Types.ObjectId,
            ref:'users',
            required:true
        }

    }
);

module.exports = Teacher = mongoose.model('teachers',TeacherSchema);