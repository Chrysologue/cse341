const express = require("express");
require("dotenv").config();
const contactsRoute = require("./routes/contactsRoute")

const app = express();
const port = process.env.PORT || 5500;

app.use(express.json())
app.use("/contacts", contactsRoute)


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => console.log("Server is running on port", port));
