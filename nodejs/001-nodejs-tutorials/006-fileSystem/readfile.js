//solution1------------------------------------------------

// var http = require("http");
// var fs = require("fs");

// http
// 	.createServer(function (req, res) {
// 		//Open a file on the server and return its content:
// 		fs.readFile("file1.html", function (err, data) {
// 			res.writeHead(200, { "Content-Type": "text/html" });
// 			res.write(data);
// 			return res.end();
// 		});
// 	})
// 	.listen(8080);

// //solution 2-------------------------------
// var http = require("http");
// var fs = require("fs");

// http
// 	.createServer(function (req, res) {
// 		// Open a file on the server and return its content:
// 		fs.readFile("demofile1.html", function (err, data) {
// 			if (err) {
// 				res.writeHead(404, { "Content-Type": "text/html" });
// 				res.write("404 Not Found");
// 				return res.end();
// 			}
// 			res.writeHead(200, { "Content-Type": "text/html" });
// 			res.write(data);
// 			return res.end();
// 		});
// 	})
// 	.listen(8080);

// //problem3----createfile/appendFile()----------------------

// var fs = require("fs");

// fs.appendFile("mynewfile2.txt", "Hello content!", function (err) {
// 	if (err) throw err;
// 	console.log("Saved!");
// });

// //problem4----createfile/open()-------------------------

var fs = require("fs");

fs.open("mynewfile4.txt", "w", function (err, file) {
	if (err) throw err;
	console.log("Saved!");
});
