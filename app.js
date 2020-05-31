var express = require('express');
var app = express();
var fs = require('fs');
//var bodyParser = require('body-parser');


// create application/json parser

// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
//app.use(bodyParser.json({ type: 'application/*+json' }))
//app.use(bodyParser().json())
//app.use('/', router)
app.use(express.json())

var router = require('./router/main')(app, fs);
 
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});