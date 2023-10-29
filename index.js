const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/scripts'));
app.use('/views', express.static(path.join(__dirname,'views')))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000)