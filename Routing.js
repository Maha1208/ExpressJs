var express = require('express');

var app = express()
app.get('/',function(req,res){
    console.log("Got a Get request for the Home Page");
    res.send("Welcome to the Express JS")
})

app.post('/',function(req,res){
    console.log("Got a Post request for the Home Page");
    res.send("I am Invisible")
})

app.delete('/del_employee',function(req,res){
    console.log("Got a Delete request for /del_employee");
    res.send("Deleted Employee");
})

app.get('/add_employee',function(req,res){
    console.log("Got a GET request for /add_employee");
    res.send("Added Employee");
})

app.get('ab*cd',function(req,res){
    console.log("Got a GET request for /ab*cd");
    res.send("Pattern matched.");
})

var server = app.listen(8000,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("http://%s:%s",host,port)
})