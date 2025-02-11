// let https = require ("http");
// console.log(https);
let http = require("http")
const PORT = 8080 ;
http.createServer(function(req,res){
    res.write("hello world");
    res.end();
}).listen(PORT)
console.log("server Running On " + PORT)