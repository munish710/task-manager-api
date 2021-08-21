const express = require("express");
const tasksRoutes = require("./routes/tasks");

const app = express();

//middlewares
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hola Amigos");
});

app.use("/api/v1/", tasksRoutes);

const port = 5000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
