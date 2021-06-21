const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
        am:{
            type:Number,
            required:true
        },

        year_registered:{
            type:String,
            required:true
        },
        user:{
            type:[{type:Schema.Types.ObjectId}],
            ref:'users'
        }
    }
);

module.exports = Lesson = mongoose.model('students',StudentSchema);