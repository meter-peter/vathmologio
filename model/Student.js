const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
        am:{
            type:Number,
            required:true
        },

        year_registered:{
            type:Number,
            required:true
        },
        user:{
            type:Schema.Types.ObjectId,
            ref:'users'
        },
        statements:{
            type:[{type:Schema.Types.ObjectId}],
            ref:'lessonStatements'
        }

    }
);

module.exports = Student = mongoose.model('students',StudentSchema);