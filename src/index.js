const express = require('express')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json())



const PORT = 3000 

app.listen(PORT, ()=>{
    console.log("Servidor rodando na porta 3000")
})