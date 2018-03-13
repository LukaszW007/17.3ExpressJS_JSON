var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());

stringifyFile = '';

app.get('/getNote', function (req, res) {
    fs.readFile('./example.json', 'UTF-8', function (err, data) {
        if (err) throw err;
        stringifyFile = data;
        res.send(data);
    });
});

app.post('/updateNote/:note', function (req, res) {
    fs.writeFile('./example.json', stringifyFile, function (err) {
        if (err) throw err;
        stringifyFile = stringifyFile + req.params.note;
        res.send(stringifyFile);
        console.log('file updated!');
    });
});

var server = app.listen(3000);

//just use npm start to run app