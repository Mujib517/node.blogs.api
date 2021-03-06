var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var userRouter = require('./routes/user.router');
var defaultRouter = require('./routes/default.router');

var app = express();

var port = process.env.PORT | 3000;

app.listen(port, function () {
    console.log("Server is running on 3000");
});

app.use(bodyParser.json());

app.use('/', defaultRouter);
app.use('/users', userRouter);
