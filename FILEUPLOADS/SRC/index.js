const express = require('express');
 
const userController = require("./CONTROLLERS/user.controller")


const app = express();
app.use(express.json())

app.use("/users", userController)
module.exports = app;