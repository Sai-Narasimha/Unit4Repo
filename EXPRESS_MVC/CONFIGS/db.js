const mongoose = require('mongoose');
const connect = () =>{
    mongoose.connect("mongodb+srv://sai-narasimha:sai123@cluster0.hibbc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports = connect;