const express = require('express');
const { Router } = require('express');
const { default: mongoose } = require('mongoose');
const Submission = require('../MODELS/submission.model')
const router = Router();

router.get("/:id", async (req, res) => {
    try {
        const submission = await Submission.findById(req.params.id).lean().exec();
        return res.status(200).send(submission); 
    } catch (error) {
        console.log('error: ', error);
        
    }
});

router.post("/", async (req, res)=>{
    try {
        const submission = await Submission.create(req.body);
        return res.status(200).send(submission);
    } catch (error) {
        console.log('error: ', error);
        
    }
}) 

module.exports = router;
