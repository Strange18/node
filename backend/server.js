// importing the express package
var express = require('express')

// using environment variable for storing the credentials for database
require('dotenv').config();

// using routers.js 
var student = require('./routers')

// using package for postgresql
const { Client } = require('pg')


//creating an instance of express
var app = express()

// port in which express should listen 
var port = 3000


// configuration for the postgresql
// getting all the data from the environment variable

const client = new Client({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: 5432,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
})

// if any error occured in the connection error message will be displayed
client.connect((err) => {
    if (err) {
        console.error(err)
        return console.error("database connection not estbalished")
    }

})


app.use('/stduent/', student)

// if a client visits localhost:3000 for now or root url i.e / that this route will send
// the json response of the query it gets from the database using the query

app.get('/get-data', async function (req, res) {
    // await client.query("INSERT INTO tbl_student(name, roll) VALUES ('Krsitina Ghimire','THA077BCT023')")
    var a = await client.query('SELECT * FROM tbl_student');

    // console.log(a.rows)
    res.json(a.rows)

})
app.post('/insert-data', async (req, res) => {
    try {
        await client.query(`INSERT INTO tbl_student(name, roll) VALUES (${req.body.name}, ${req.body.roll})`);
        res.sendStatus(200)
    }
    catch (err) {
        res.sendStatus(500)
    }


})

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