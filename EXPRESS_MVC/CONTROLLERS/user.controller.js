const express = require('express');
const { Router } = require('express');
const { default: mongoose } = require('mongoose');
const User = require('../MODELS/user.model')
const router = Router();

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(200).send(user); 
    } catch (error) {
        console.log('error: ', error);
        
    }
});
router.get("/", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(200).send(user); 
    } catch (error) {
        console.log('error: ', error);
        
    }
});

router.post("/", async (req, res)=>{
    try {
        const user = await User.create(req.body);
        return res.status(200).send(user);
    } catch (error) {
        console.log('error: ', error);
        
    }
});
router.delete('/:id', async (req,res)=>{
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        return res.status(200).send(user)
    } catch (error) {
        console.log('error: ', error);
        
    }
})

module.exports = router;
