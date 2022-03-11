const express = require('express');
const app = express();
app.use(allBooks)
app.get("/books/harryporter", (req, res) => {
   return res.send({books :req.name});
    // console.log(req.name)
})

function allBooks(req, res,next) {
    // console.log(req.params.name)
    if(req.path === "/books"){
        console.log("Fetching books....")
        res.send("Fetching books....")
    }
    if(req.path === "/books/harryporter"){
       res.send({"bookName" : "Harry porter"})
    }
    next();
}
app.listen(5200, (req, res) => {
    // console.log(req.params.name)
    console.log("Fetching all books")
    
})