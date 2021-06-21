const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    requiredLesson:{
        type:[{type:Schema.Types.ObjectId}],
        ref:'lessons',
        required:false
    }
    
    }
);

module.exports = Lesson = mongoose.model('lessons',LessonSchema);