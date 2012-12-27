
var express = require('express');
var path = require('path');

var app = express.createServer();

app.use(express.favicon());
app.set('view engine', 'jade');
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.send('This is a page.');
});

app.get('/form', function (req, res) {
  res.render('form');
});

/**
 * Post
 */
app.post('/form', function (req, res) {
  res.send({"message": "This is a response"});
});

app.listen(3000);
console.log('Express app started on port 3000');