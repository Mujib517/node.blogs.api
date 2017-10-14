var http = require('http');
var fs = require('fs');


function handleRequests(req, res) {

    switch (req.url) {
        case '/':
            var content = fs.readFileSync("index.html");
            res.write(content);
            break;
        case '/about':
            res.write("About Page");
            break;
        case '/contact':
            res.write("Contact Page");
            break;
        default:
            res.write("Home Page");
    }
    res.end();
};

var server = http.createServer(handleRequests);

server.listen(3000, function () {
    console.log("Server is running on 3000");
});
