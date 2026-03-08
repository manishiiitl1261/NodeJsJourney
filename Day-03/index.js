// Building HTTP Server in NodeJS

const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 8000;

// This is how create a server in nodejs without express

const server = http.createServer((req, res) => {
  console.log("New Req Recive");
  res.end("Hello From Manish's Server");
});

server.listen(port, () => {
  console.log("Server is Created :) hureee ");
});

//
//  Now built a  Request log Program

const myServer = http.createServer((req, res) => {
  if (req.url == "/favicon.ico") res.end();
  const myUrl = url.parse(req.url, true);
  // if request come from favicon.ico then ignore it
  const log = `\n${Date().toString()} : New Request Recive at ${myUrl.path}`;
  fs.appendFile("./log.txt", log, () => {
    console.log("New Request Recive");
    switch (myUrl.pathname) {
      case "/":
        res.end("Welcome to Home");
        break;
      case "/about":
        const userName = myUrl.query.myname;
        res.end(`Hii ${userName}`);
        break;
      default:
        res.end("404 Not Found");
    }
  });
});

myServer.listen(port, () => {
  console.log("Server started");
});
