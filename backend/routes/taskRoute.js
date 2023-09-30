const express = require("express");
const Task = require("../models/taskModel");
const {
  createTask,
  getTask,
  oneTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.post("/api/tasks", createTask);

router.get("/api/tasks", getTask);
router.get("/api/tasks/:id", oneTask);
router.delete("/api/tasks/:id", deleteTask);

module.exports = router;
