const express = require('express');
// const { Router } = require('express');
const mongoose = require('mongoose');
const Evaluation = require('../MODELS/evaluation.model')
const router = express.Router();


router.get("/", async (req, res) => {
    try {
        const evaluation = await Evaluation.find().lean().exec();
        return res.status(200).send(evaluation); 
    } catch (error) {
        console.log('error: ', error);
        
    }
});
router.get("/:id", async (req, res) => {
    try {
        const evaluation = await Evaluation.findById(req.params.id).lean().exec();
        return res.status(200).send(evaluation); 
    } catch (error) {
        console.log('error: ', error);
        
    }
});
router.post("/", async (req, res)=>{
    try {
        const evaluation = await Evaluation.create(req.body);
        return res.status(200).send(evaluation);
    } catch (error) {
        console.log('error: ', error);
        
    }
}) 

module.exports = router;
