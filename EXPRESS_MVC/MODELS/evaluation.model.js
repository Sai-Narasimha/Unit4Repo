const mongoose = require('mongoose');
const instructor = require('./instructor.model');
const batch = require('./batch.model')
//evolution schema
const evaluationSchema  = mongoose.Schema({
    dateOfEvaluation : {type: "String", required: true},
    // instructor : {type: mongoose.Schema.Types.ObjectId,ref:"instructor", required: true},
    batchId : {type:mongoose.Schema.Types.ObjectId,ref:"batch",required: true}

},{
    versionKey : false,
    timestamps :true
});

// evaluation model
const Evaluation = mongoose.model("evaluation", evaluationSchema);

module.exports = Evaluation;