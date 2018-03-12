var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('GET request');
    res.send('Hello GET');
});

var server = app.listen(3000, function() {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});

app.post('/',function(req,res){
    console.log('POST request');
    res.send('Hello POST');
});

app.delete('/del_usr',function (req,res) {
    console.log('DELETE request');
    res.send('hi DELETE');
});
app.get('/list_user', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony /list_user');
    res.send('Strona z listą użytkowników!');
});

app.get('/ab*cd', function(req, res) {
    console.log('Otrzymałem żądanie GET do strony /ab*cd');
    res.send('Wzór pasuje');
});