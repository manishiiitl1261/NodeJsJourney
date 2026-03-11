const http = require("http");
const port = 8000;
const myServer = http.createServer((req, res) => {
  const myUrl = req.url;
  switch (myUrl) {
    case "/":
      res.end("Welcome to Home page ;) ");
      break;
    case "/signup":
      if (req.method == "GET") res.end("This is signup form ");
      else if (req.method == "POST") res.end("Succesfully Created");
      break;
    default:
      res.end("404 Not Found");
  }
});

myServer.listen(port, () => {
  console.log("Server Started");
});
