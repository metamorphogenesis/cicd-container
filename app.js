const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hi there!"));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("I'm ok");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
