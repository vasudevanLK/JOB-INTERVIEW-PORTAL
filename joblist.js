const mongoose  = require("mongoose");

const JobSchema = new mongoose.Schema({

    company: String,
    role: String,
    description: String,
    applyDate: Date,
    endDate: Date,
    location: String
});

const Job=mongoose.model('job',JobSchema);
module.exports=Job;