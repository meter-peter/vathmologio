const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type:String ,
        required :true,
    }
    ,
    firstname :{
        type :String , 
        required:true
    },
    firstname:{
        type : String ,
        required:true
    },
    email:{
        type:String ,
        required :true
    
    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    student:{
        type:Schema.Types.ObjectId,
        ref:'students',
        required:false

    },
    teacherRank:{
       type:Number,
        required:false
    }
});

module.exports = User = mongoose.model('users',UserSchema);