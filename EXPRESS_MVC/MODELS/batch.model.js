const mongoose = require('mongoose');
// Batch schema 
const batchSchema= mongoose.Schema({
    
    batchName :  {type: "string", required: true},
    // createdAt : {type: "string", required: true},
    // updatedAt : {type: "string", required: true}
},{
    versionKey : false,
    timestamps :true,
}) 

// batch model 
const Batch = mongoose.model("batch", batchSchema)
module.exports = Batch