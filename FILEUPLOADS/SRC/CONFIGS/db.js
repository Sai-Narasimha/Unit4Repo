const mongoose = require('mongoose');

const connect = () =>{
    mongoose.connect("mongodb+srv://sainarasimha:sai123@cluster0.qllwz.mongodb.net/fileuploads?retryWrites=true&w=majority")
}

module.exports = connect