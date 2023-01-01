const express = require('express')
const app = express()
const shirtRouter = require('./Routes/shirtsRoutes')


app.use(express.json())
app.use(express.urlencoded())

require('dotenv').config()

const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL)
.then(()=> console.log("Connected to Shirts DataBase"))
.catch(error => console.log(error))

app.get('/', (req,res)=>{
    res.send('HELLO WELCOME TO MY SHIRTS STORES')
})
app.use('/shirts', shirtRouter)

const PORT = 8080
app.listen(PORT, ()=>console.log(`Running Express Server on Port ${PORT}`))
