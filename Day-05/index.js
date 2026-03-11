const express = require("express");
const port = 8000;
//  Handler function
const app = express();

app.get("/", (req, res) => {
  return res.send("Heloo from Home Page ");
});

app.get("/about", (req, res) => {
  return res.send("Hello from About Page ");
});
app.listen(port, () => console.log("Server started"));
