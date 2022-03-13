const mongoose = require('mongoose');
// const user = require("../MODELS/user.model")

// instructor schema
const instructorSchema = mongoose.Schema({
    // userId : {type: mongoose.Schema.Types.ObjectId, ref : "user", required: true},
    userId : {type :mongoose.Schema.Types.ObjectId, required: true }
},{
    timestamps :true,
    versionKey :false
}
);

// instructor model 
const Instructor = mongoose.model("instructor", instructorSchema);
module.exports = Instructor;