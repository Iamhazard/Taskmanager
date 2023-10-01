/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiEdit, FiTrash2, FiTool } from "react-icons/fi";

const Task = ({ task, index, deleteTask, getSingleTask }) => {
  return (
    <div className="relative flex items-center w-full bg-gray-300 p-4 my-2 animate-slide-in">
      <p>
        <b>{index + 1}. </b>
        {task.name}
      </p>
      <div className="ml-7 cursor-pointer flex space-x-2">
        <FiEdit
          className="text-green-500"
          onClick={() => getSingleTask(task)}
        />
        <FiTool className="text-blue-500" />
        <FiTrash2
          className="text-red-500"
          onClick={() => deleteTask(task._id)}
        />
      </div>
    </div>
  );
};

export default Task;
