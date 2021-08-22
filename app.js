const express = require("express");
const tasksRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");

require("dotenv").config();

const app = express();

//middlewares
app.use(express.json());
app.use(express.static("./public"));

//routes
app.use("/api/v1/tasks", tasksRoutes);

app.use(notFound);

app.use(errorHandler);

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
