const http = require('http')
const express = require('express')
const path = require('path')
const app = express()
const ejs = express('ejs')
const bodyParser = require('body-parser');
const port = 8080

// const publicDirectoryPath = path.join(__dirname, '../public')
// app.use(express.static(publicDirectoryPath))

app.use(bodyParser.urlencoded({ extended:false}));

app.set('views', __dirname + '/views')
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('/index.ejs');
})

app.get('/about', (req, res) => {
    res.render('/about.ejs');
})

app.get('/contact-me', (req, res) => {
    res.send('Contact Page')
})

app.get('/404', (req, res) => {
    res.send('404 Page')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})