const express = require("express");
const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("HIS");
});

app.get("/about", (req, res) => {
  res.send("about me");
});

app.listen(port, () => console.log(`server is running on port ${port} `));
