"use client";
// import axios from "axios";
import React from "react";
// import { toast } from "react-toastify";

const TaskForm = ({
  handleCreateTask,
  name,
  handleInputChange,
  updateTask,
  isEditing,
}) => {
  return (
    <form
      onSubmit={isEditing ? updateTask : handleCreateTask}
      className="space-y-2">
      <input
        type="text"
        placeholder="Add a task"
        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-15"
        type="submit">
        {isEditing ? "Edit" : "Add"}
      </button>
    </form>
  );
};
export default TaskForm;
