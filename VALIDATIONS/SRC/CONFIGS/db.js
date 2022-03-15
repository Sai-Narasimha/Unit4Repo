const mongoose = require('mongoose');

const connect = ()=>{
    return mongoose.connect("mongodb+srv://sainarasimha:sai123@cluster0.do216.mongodb.net/validations?retryWrites=true&w=majority")
}

module.exports = connect;