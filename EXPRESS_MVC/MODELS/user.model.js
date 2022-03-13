const mongoose = require('mongoose');
//users Schema
const userSchema = mongoose.Schema({
    firstName : {type: "string", required: true},
    lastName : {type: "string", required: true},
    dateOfBirth : {type: "string", required: true},
    gender : {type: "string", required: true},
    role : {type: "string", required: true},
    // createdAt : {type: "string", required: true},
    // updatedAt : {type: "string", required: true}
},
{ 
    versionKey: false,
    timestamps : true
});

// user model
const User = mongoose.model("user", userSchema);
module.exports = User;
