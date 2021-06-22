const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
        teacherRank:{
            type:Number,
            required:true
        },

        lessonsTeaching:{
            type:[{type:Schema.Types.ObjectId}],
            ref:'lessons'
        },
        user:{
            type:[{type:Schema.Types.ObjectId}],
            ref:'users'
        }

    }
);

module.exports = Teacher = mongoose.model('teachers',TeacherSchema);