const express = require('express');
const mongoose = require("mongoose");
const connect = require('./CONFIGS/db');
const app = express();

// const app = express();

const evaluationController = require('../EXPRESS_MVC/CONTROLLERS/evaluation.controller');
const studentController = require('../EXPRESS_MVC/CONTROLLERS/student.controller');
const batchController = require('../EXPRESS_MVC/CONTROLLERS/batch.controller');
const userController = require('../EXPRESS_MVC/CONTROLLERS/user.controller');
const submissionController = require('../EXPRESS_MVC/CONTROLLERS/submission.controller');
const instructorController = require('../EXPRESS_MVC/CONTROLLERS/instructor.controller');



app.use(express.json());
app.use("/evaluation", evaluationController)
app.use("/student", studentController)
app.use("/batch", batchController)
app.use("/user", userController)
app.use("/submission", submissionController)
app.use("/instructor", instructorController)


// const express = require('express');

// const connect = require('./CONFIGS/db');
// const app = express();.




app.listen(1342, async()=>{
    try {
        await connect();
        console.log("listining port 1342")
    } catch (error) {
        console.log('error: ', error);
    }
})
