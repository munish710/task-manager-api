const getAllTasks = (req, res) => {
  res.send("get all Tasks");
};

const createTask = (req, res) => {
  //   res.send("create a Task");
  res.json(req.body);
};

const getTask = (req, res) => {
  //   res.send("get single task");
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete Task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
