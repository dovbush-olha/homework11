const http = require("http");
const os = require("os");
const personalmodule = require("./personalmodule.js");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(`Date of request: ${personalmodule(os.userInfo().username)}`);
  })
  .listen(8000);

console.log("Server running");
