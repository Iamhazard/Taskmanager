const Task = require("../models/taskModel");

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    // console.log(req.body);
    // res.send("task is created");
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      msg: error.messages,
    });
  }
};

const getTask = async (req, res) => {
  try {
    // console.log(req.body);
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      msg: error.messages,
    });
  }
};

//get a task with :id
const oneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`No task with id: ${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      msg: error.messages,
    });
  }
};

//to delete tasks

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = Task.findByIdAndDelete();
  } catch (error) {}
};

module.exports = {
  createTask,
  getTask,
  oneTask,
  deleteTask,
};
