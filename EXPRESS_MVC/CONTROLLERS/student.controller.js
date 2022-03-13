const express = require('express');
const { Router } = require('express');
const { default: mongoose } = require('mongoose');
const Student = require('../MODELS/student.model')
const router = Router();

router.get("/:id", async (req, res) => {
    try {
        const student = await Student.find().lean().exec();
        return res.status(200).send(student); 
    } catch (error) {
        console.log('error: ', error);
        
    }
});

router.post("/", async (req, res)=>{
    try {
        const student = await Student.create(req.body);
        return res.status(200).send(student);
    } catch (error) {
        console.log('error: ', error);
        
    }
}) 

module.exports = router;
