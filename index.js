var express = require("express");

var app = express();

app.get("/hello",(req,res)=>{
    res.send("Hello Express JS")
});

app.listen(3000);
