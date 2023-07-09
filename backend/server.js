var express = require('express')

var app = express()

require('dotenv').config();

var student = require('./routers')

var port = 3000

var pg = require('pg')


var conString = process.env.URL_DATABASEnpm

var client = new pg.Client(conString);


app.use('/', student)

// app.use(function (req, res, next) {
//     console.log("Start")

//     // function route handler
//     next();
// });


// app.get('/', function (req, res) {
//     res.send("Hello World from the world of Node and Express");
// })

// app.get('/:id', function (req, res) {
//     res.send("your id is " + req.params.id)
// })



app.listen(port)