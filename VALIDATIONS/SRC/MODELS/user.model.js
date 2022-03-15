const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    first_name : {type: String, required: true},
    last_name : {type: String, required: true},
    email : {type: String, required: true,unique: true},
    pincode : {type: Number, required: true},
    age : {type: Number, required: true},
    gender : {type: String, required: true, enum : ["male","female","others"]}
},{
    versionKey: false,
    timestamp : true
});

const User = mongoose.model("user",userSchema);

module.exports = User;