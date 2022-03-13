const mongoose = require('mongoose');

// student shcema;
const studentSchema = mongoose.Schema({
    // userId : {type : mongoose.Schema.Types.ObjectId, ref : "user",path : "user", required: true},
    rollId : {type: "number", required: true},
    // currentBatch : {type: mongoose.Schema.Types.ObjectId,ref : "batch",path :"currentBatch", required: true}
    // createdAt : {type: "string", required: true},
    // updatedAt : {type: "string", required: true}

},
{ 
    versionKey : false,
    timestamps :true,
});

//students model
const Student = mongoose.model("student", studentSchema);
module.exports = Student;