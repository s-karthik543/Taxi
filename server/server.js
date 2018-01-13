var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var drivers = require("./routes/driver");


var app = express();

var port = 3000;

app.use("/api", drivers);

app.listen(port, function () {
    console.log("Server running on port ", port)
})