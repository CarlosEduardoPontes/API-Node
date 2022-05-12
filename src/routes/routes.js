const express = require('express')
const router = express.Router()
const CadastroControler = require('../controllers/CadastroControler')
const LoginController = require('../controllers/LoginController')

router.post('/api/cadastro/create', CadastroControler.create);                                                                                      
router.post('/api/login', LoginController.create); 

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