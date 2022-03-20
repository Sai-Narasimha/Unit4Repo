// const path = require('path')
const express = require('express')

const User = require("../MODELS/user.model")

const upload = require("../MIDDLEWARES/uploads")

const fs = require("fs")
const router = express.Router();

router.get('/',upload.any("profile_pic"), async (req,res) => {
    try {
        const user = await User.find().lean().exec();

        return res.status(200).send(user);
    } catch (error) {
        console.log('error: ', error.message);
        
    }
});

router.post("/",upload.single("profile_pic"),async (req,res) =>{
    try {
        const user = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            profile_pic: req.file.path
        })
        // const user = await User.create();
        console.log(user)
        return res.status(200).send(user)
    } catch (error) {
        console.log('error: ', error.message);
        
    }
});

router.patch("/:id",upload.single("profile_pic"), async(req,res) =>{
    try {
        
        const user = await User.findById(req.params.id).lean().exec();
        old_image_path = user.profile_pic;
    
        let update = await User.findByIdAndUpdate(req.params.id,{profile_pic : req.file.path}, {new :true}).lean().exec();
        fs.unlinkSync(old_image_path)
    
        return res.status(200).send(update)
    } catch (error) {
        res.status(500).send(error.message)
        
    }
});

router.delete("/:id",async (req, res) => {
    try {
        // const user = await User.findById(req.params.id).lean().exec();
        // image_path = user.profile_pic;
    
        // fs.unlinkSync(image_path);
    
        const deletedUser = await User.findByIdAndDelete(req.params.id,{profile_pic}).lean().exec();
        return res.status(200).send(deletedUser)
        
    } catch (error) {
        res.status(500).send(error.message)
        
    }
})
module.exports = router;

