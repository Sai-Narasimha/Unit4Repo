// const Router  = require('express');
const express = require('express');
const mongoose  = require('mongoose');
const Batch = require('../MODELS/batch.model')
const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        const batch = await Batch.findById(req.params.id).lean().exec();
        return res.status(200).send(batch); 
    } catch (error) {
        console.log('error: ', error);
        
    }
});

router.post("/", async (req, res)=>{
    try {
        const batch = await Batch.create(req.body);
        return res.status(200).send(batch);
    } catch (error) {
        console.log('error: ', error);
        
    }
}) 

module.exports = router;
