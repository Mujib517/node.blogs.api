var express = require('express');
var fs=require('fs');

var app = express();

app.listen(3000, function () {
    console.log("Server is running on 3000");
});

app.get('/',function(req,res){
    
    var products=[{name:'Product 1',brand:'Nokia'},{name:'Product 2',brand:'Nokia'}];
    
    res.json(products);
    //res.send("Hello ExpressJs");
})