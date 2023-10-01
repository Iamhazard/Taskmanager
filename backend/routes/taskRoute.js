const express = require("express");
const Task = require("../models/taskModel");
const {
  createTask,
  getTask,
  oneTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);
router.get("/", getTask);
router.get("/:id", oneTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

module.exports = router;
