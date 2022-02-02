const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const posts = {};

const app = express();

app.use(bodyParser.json());

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = { id, title };

  res.status(201).send(posts[id]);
});

app.listen(3000, (req, res) => {
  console.log("Server is listening on port 3000");
});
