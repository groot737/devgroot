const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.j4b7hrp.mongodb.net/?retryWrites=true&w=majority`)
 .then(() => {
    console.log('connected')
 })


app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/scripts'));
app.use('/views', express.static(path.join(__dirname,'views')))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000)