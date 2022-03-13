const mongoose = require('mongoose');

//submission schema 

const submissionSchema = mongoose.Schema({
    evaluationId : {type: mongoose.Schema.Types.ObjectId,ref :"evaluation", required: true},
    studentId : {type: "number", required: true},
    marks : {type: "number", required: true},
    createdAt : {type: "date", required: true},
    updatedAt : {type: "date", required: true}
})

//submission model 
const Submission = mongoose.model("submission", submissionSchema)
module.exports = Submission;