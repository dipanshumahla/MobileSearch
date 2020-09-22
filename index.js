var express = require('express');
var app = express();
var parser = require('body-parser');
var router = require('./routes/index');

var port = process.env.port || 3000;

app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.use(parser.urlencoded({ extended: true }));


app.use('/', router);

app.listen(port, () => {
    console.log("Mobile Search is online");
});