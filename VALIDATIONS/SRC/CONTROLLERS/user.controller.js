const express = require('express');
const { body, validationResult } = require("express-validator");
const User = require('../MODELS/user.model');
const router = express.Router();

router.post('/',
body("first_name")
.trim()
.not()
.isEmpty()
.withMessage("first name is required")
.isLength({min : 1}),
body("last_name")
.trim()
.not()
.isEmpty()
.withMessage("last name is required")
.isLength({min : 1}),
body("email")
.not()
.isEmail()
.custom(async (value) => {
    const user = await User.findOne({email : value})

    if(user) {
        throw new Error("Email is already existed")
    }
    return true;
}),
body("pincode")
.not()
.isEmpty()
.withMessage("pincode is required")
.isLength({min : 6},{max : 6})
.withMessage("pincode should be 6 characters"),
body("age")
.not()
.isEmpty()
.withMessage("age is required")
.custom((value) => {
    if(value < 1 || value > 100){
        throw new Error("age must be between 1 and 100")
    }
    return true;
}),
body("gender")
.not()
.isEmpty()
.withMessage("gender is required as Male/Female/Others")


,async (req,res) =>{
    try {
        const user = await User.create(req.body);
        const errors = validationResult(req);
        // console.log({errors});
        if(!errors.isEmpty()){
            return res.status(400).send({errors:errors.array()})
        }
        return res.status(201).send(user)
        
    } catch (error) {
        return res.status(400).send({message:error.message});
        
    }
});

module.exports = router;