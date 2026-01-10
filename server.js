const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5500;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => console.log("Server is running on port", port));
