const express = require('express');
// const { Router } = require('express');
const  mongoose  = require('mongoose');
const Instructor = require('../MODELS/instructor.model')
const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        const instructor = await Instructor.findById(req.params.id).populate({path:"userId", select:"firstName"}).lean().exec();
        return res.status(200).send(instructor); 
    } catch (error) {
        console.log('error: ', error);
        
    }
});

router.post("/", async (req, res)=>{
    try {
        const instructor = await Instructor.create(req.body);
        return res.status(200).send(instructor);
    } catch (error) {
        console.log('error: ', error);
        
    }
}) 

module.exports = router;
