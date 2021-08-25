const mongoose = require('mongoose');
const Schema = mongoose.Schema;



LessonTeachingSchema = new Schema({
        name:{
            type:String
        },
        lesson:{
        type:Schema.Types.ObjectId,
        ref:'lessons'
         },
        teacher:{
        type:Schema.Types.ObjectId,
        ref:'teachers'
         },
           
        theoryMultiplier:{
            type:Number,
           
        },
        labMultiplier:{
            type:Number,
         
        },
        theoryRestriction:{
            type:Number,
            
        }
    }

);

module.exports = Lesson = mongoose.model('lessonsTeaching',LessonTeachingSchema);