const http = require("http");
const os = require("os");
const path = require("path");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(`<h1>System information</h1>
    Current user name: ${os.userInfo().username}<br/>
    OS type: ${os.type()}<br/>
    System work time: ${os.uptime() * 60} minutes<br/>
    Current work directory: ${__dirname}<br/>
    Server file name: ${path.basename("D:\\Softserve\\homework11\\server.js")}
    `);
  })
  .listen(5000);

console.log("Server running");
