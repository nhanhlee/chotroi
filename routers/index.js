const express = require("express")
const router = express.Router();
const userModel = require('../../models/user')

router.get('/login',(req,res)=>{
    userModel.create({name: "nhanh"})
.then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)})
})

module.exports = router;