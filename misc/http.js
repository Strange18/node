// const http = require("http");

// const port = 8000;

// const server = http.createServer((req, res) =>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/html'),
//     res.end("this is first node project")
// })

// server.listen(port)


// var hquirettp = require('http');
// var uc = require('upper-case');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(uc.upperCase("Hello World!"));
//     res.end();
// }).listen(8080);

var express = require('express');
const app = express;


var pg = require('pg');

//Can be found in the Details page
var conString = "postgres://hksthusn:SCuGtJOWNWQ_GceymySl8Rd9ocM9rPcS@tiny.db.elephantsql.com/hksthusn"
var client = new pg.Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function (err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});
