const mongoose = require('mongoose');


///user details appication

const UserSchema = new mongoose.Schema({

    username: String,
    age: Number,
    gender: String,
    cgpa: Number,
    skill:String,
    location: String,
    email:String


})

const Application = mongoose.model('application',UserSchema);
module.exports=Application;