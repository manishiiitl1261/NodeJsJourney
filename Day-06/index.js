const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
// Create a Instance
const app = express();
const port = 8000;

// Middleware -> plugin
app.use(express.urlencoded({ extended: false }));
//The above middle do like any form data which is come from req it will add in body

app.get("/users", (req, res) => {
  const html = `<ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  res.json(user);
});

// Now the browser only make GET request by dafault so for anothers method i used my postman

app.post("api/users", (req, res) => {
  const body = req.body;

  //Race conditions: Doing users.length + 1 for id is naive if multiple requests come concurrently. Better to compute maxId + 1 or use a database/locking.

  //users.push({ ...body, id: users.length + 1 });

  // compute new id more robustly
  const maxId = users.reduce((max, u) => Math.max(max, u.id || 0), 0);
  const newUser = { ...body, id: maxId + 1 };
  // update in-memory array
  users.push(newUser);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "pending" });
  });
});

app.patch("", () => {});
app.delete("", () => {});

//   we can do like if path is same  -> like for if in a future you want to change the path so from 1 line it's possible for that

app
  .route("/api/users/:id")
  .get((req, res) => {})
  .patch((req, res) => {})
  .delete((req, res) => {});

app.listen(port, () => console.log("Server Started :) "));
