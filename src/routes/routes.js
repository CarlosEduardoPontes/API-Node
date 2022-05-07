const express = require('express')
const router = express.Router()

router.get('/',function(req,res,next){
    res.send("hello world")
})
router.get('/home',function(req,res,next){
    res.send("home")
})
router.get('/cadastro',function(req,res,next){
    res.send("Cadastre-se")
})
router.get('/login',function(req,res,next){
    res.send("Login")
})





module.exports = router