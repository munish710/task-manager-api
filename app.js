const express = require("express");
const tasksRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

const app = express();

//middlewares
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hola Amigos");
});

app.use("/api/v1/tasks", tasksRoutes);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
