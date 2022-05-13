const {Cadastro} = require("../models/Cadastro")
//const teste = require("../models/Cadastro")

module.exports = {
    async index(req, res, next){
        
    },

    async create(req,res,next){
        try{
            let l = await Cadastro.create({ ...req.body })
            return res.status(201).json(l);
        }catch(error){
            return res.status(400).json({message: "Error: " + error.message})
        }
    },

    async getById(req, res, next){

    },

    async update(req,res,next){

    },
    
    async delete(req,res,next){

    },
}