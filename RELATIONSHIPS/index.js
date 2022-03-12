const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()) //express();

const connect = ()=>{
    return mongoose.connect("mongodb+srv://sainarasimha:sai123@cluster0.uko3c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}
//creating schemas

//section schema
const sectionSchema = mongoose.Schema({
    sectionName : {type:String,required:true},
    books : {type: mongoose.Schema.Types.ObjectId,ref:"book",required: true},
}, 
{
    versionKey:false,
    timestamp:true
})
// section Model
const Section = mongoose.model("section", sectionSchema);

//book schema
const bookSchema = mongoose.Schema({
    authorName : [{type: mongoose.Schema.Types.ObjectId,ref:"author", required: true}], 
    bookName : {type: 'String', required: true}, 
    body : {type: 'String', required: true}
},
{
    versionKey:false,
    timestamp:true
})
// book Model
const Book = mongoose.model("book", bookSchema);

// Author schema
const authorSchema = mongoose.Schema({
    booksName : {type: 'String', required: true},
    firstName : {type: 'String', required: true},
    lastName : {type: 'String', required: true}
},{
    versionKey:false,
    timestamps:true
});

// Author Model
const Author = mongoose.model("author", authorSchema);


//CRUD MODELS

// section crud
app.get('/section', async (req, res) => {
    try {
        const section = await Section.find().populate("book").lean().exec();
        return res.send(section)
    } catch (error) {
        console.log('error: ', error);
        
    }
})
app.post('/section', async (req, res) => {
    try {
        const section = await Section.create(req.body);
        // console.log("working")
        return res.send(section)
    } catch (error) {
        console.log('error: ', error);
        
    } 
})
// author

app.get('/author', async (req, res) => {
    try {
        const author = await Author.find().populate("author").lean().exec();
        return res.send(author)
    } catch (error) {
        console.log('error: ', error);
        
    }
})
app.get('/author/:id', async (req, res) => {
    try {
        const author = await Author.findById(req.params.id).lean().exec();
        return res.send(author)
    } catch (error) {
        console.log('error: ', error);
        
    }
})
app.post('/author', async (req, res) => {
    try {
        const author = await Author.create(req.body);
        // console.log("working")
        return res.send(author)
    } catch (error) {
        console.log('error: ', error);
        
    } 
})


app.delete('/author/:id', async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(author)
    } catch (error) {
        console.log('error: ', error);
        
    }
})
// books crud
app.get('/books', async (req, res) => {
    try {
        const book = await Book.find().lean().exec();
        return res.send(book)
    } catch (error) {
        console.log('error: ', error);
        
    }
})
app.post('/books', async (req, res) => {
    try {
        const book = await Book.create(req.body);
        // console.log("working")
        return res.send(book)
    } catch (error) {
        console.log('error: ', error);
        
    } 
})




app.listen(5000,async ()=>{
    try {
        await connect();
        console.log("listening on port 5000")
        
    } catch (error) {
        console.log('error: ', error);
        
    }
});