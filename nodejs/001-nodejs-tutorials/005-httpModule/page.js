// Solution1------------------------------

// var http = require("http");

// //create a server object:
// http
// 	.createServer(function (req, res) {
// 		res.write("Hello World!");
// // write a response to the client
// 		res.end();
// //end the response
// 	})
// 	.listen(8080);

// //the server object listens on port 8080

// // solution 2--------------------------------------------------
// var http = require("http");
// var url = require("url");

// http
// 	.createServer(function (req, res) {
// 		res.writeHead(200, { "Content-Type": "text/html" });
// 		var q = url.parse(req.url, true).query;
// 		var txt = q.year + " " + q.month;
// 		res.end(txt);
// 	})
// 	.listen(8080);

// var http = require("http");
// var url = require("url");

// // //solution-3---------------------------------

// var http = require("http");
// http
// 	.createServer(function (req, res) {
// 		res.writeHead(200, { "Content-Type": "text/html" });
// 		res.write(req.url);
// 		res.end();
// 	})
// 	.listen(8080);

// solution 4---------------------------------

// var http = require("http");
// var url = require("url");
// http
// 	.createServer((req, res) => {
// 		res.writeHead(200, { "Content-Type": "text/html" });
// 		var que = url.parse(req.url, true).query;
// 		var text = que.year + " " + que.month;
// 		res.end(text);
// 	})
// 	.listen(8080);

// var http=require('http');
// var url=require('url');
// http.createServer((req,res)=>{
// 	res.writeHead(200,{"Content-Type":'text/html'});
// 	var q=url.parse(req.url,true).query;
// 	var text=q.year+" "+q.month;
// 	res.end(text)
// }).listen(8080)




var http=require('http');
var url=require('url');


http.createServer((req,res)=>{
	res.writeHead(200,{'Content-Type':'text/html'});
	var q=ur.parse(req.url,true).query;
	var text=q.year+" "+q.month;
	res.end(text)
}).listen(8080);
