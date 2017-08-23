var express = require('express');
var morgan  = require('morgan');
var path    = require('path');
var pg      = require('pg');

var app = express();
app.use(morgan('combined'));


var config = {
    host: 'localhost',
    user: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'test'

};
 
 //Database query listen
 
 app.get('/database1',function(req, res)
 {
   client.query('SELECT * FROM test', function(err, result){
    if(err){
      res.status(500).send(err.toString());
    }
    else {
      res.send(JSON.stringify(result));
    }
  });
 });




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
//Obatin CSS file
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
//Obtain front end  javascript
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
//Obtain Image
app.get('/ui/IMG-20170721-WA0016.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'IMG-20170721-WA0016.png'));
});

//Reqst and respond with files in 'ui'
var element_name;
app.get('/:element_name', function (req, res) {
res.sendFile(path.join(__dirname, 'ui/' + req.params.element_name));
});






var port = 8081; // Use 8080 for local development because you might already have apache running on 80
app.listen(8081, function () {
  console.log(`Test Dos ${port}!`);
});
