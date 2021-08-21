const express = require("express");

const app = express();

//routes
app.get("/", (req, res) => {
  res.send("Hola Amigos");
});

const port = 5000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
