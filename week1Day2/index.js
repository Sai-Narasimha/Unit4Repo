const express = require('express')
const app = express();


app.get("",function (req, res){
    // response
    console.log("Hello")
})

app.get("/books",function (req, res){
    // sending response in json
    res.send(
        {   
            Book1 : "Atomic Habits",
            Book2 : "Zero to One",
            Book3 : "The Plot",
            Book4 : "The Hard Thing About Hard Things"})
    })
app.listen(5200,()=>{
    console.log("Port is ready");
})
