"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Task, TaskForm } from "..";
import { toast } from "react-toastify";
import axios from "axios";
// import { Loader } from "../../Assets/index";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [taskID, setTaskID] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });

  const { name } = formData;

  const getTasks = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("http://localhost:5000/api/tasks");
      setTasks(data);

      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("This field cannot be empty");
    }
    try {
      await axios.post("http://localhost:5000/api/tasks", formData);
      toast.success("Task added sucessfully");
      setFormData({ ...formData, name: "" });
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      getTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };

  //update form data
  const getSingleTask = async (task) => {
    setFormData({
      name: task.name,
      completed: false,
    });
    setTaskID(task._id);
    setIsEditing(true);
  };

  //update and add tasK
  const updateTask = async (e) => {
    e.preventDefault();

    if (name === "") {
      return toast.error("Input field cannot be empty!");
    }
    try {
      await axios.put(`http://localhost:5000/api/tasks/${taskID}`, formData);
      setFormData({ ...formData, name: "" });
      setIsEditing(false);
      getTasks();
    } catch (error) {
      toast(error.message);
    }
  };

  //to complete tasks

  const setToComplete = async (task) => {
    const newFormData = {
      name: task.name,
      completed: true,
    };
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${task._id}`,
        newFormData
      );
      getTasks();
    } catch (error) {
      toast(error.message);
    }
  };
  useEffect(() => {
    const cTask = tasks.filter((task) => {
      return task.completed === true;
    });
    setCompletedTasks(cTask);
  }, [tasks]);

  return (
    <div className="mx-auto px-4 py-8 max-w-xl my-2">
      <div className=" bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
        <div className="md:flex-shrink-0">
          <img
            src="https://images.pexels.com/photos/7376/startup-photos.jpg"
            alt="Tasks"
            className="w-full h-64 rounded-lg rounded-b-none"
          />
        </div>
        <div className="px-4 mt-2 space-y-4 py-2">
          <h2 className="font-bold text-2xl text-gray-800 tracking-normal">
            Task manager
          </h2>

          <div className=" flex items-center justify-between  mt-2 mx-6">
            <TaskForm
              name={name}
              handleInputChange={handleInputChange}
              handleCreateTask={handleCreateTask}
              isEditing={isEditing}
              updateTask={updateTask}
            />
          </div>
          <div className="relative mt-8">
            <div className="flex  space-x-12">
              <p>
                <b>Total task:</b>
                {tasks.length}
              </p>

              <p>
                <b className="ml-10">Completed Tasks:{completedTasks.length}</b>
              </p>
            </div>

            <div className=" border h-0 w-full border-gray-600"></div>
            <hr />
            {isLoading && (
              <div className="flex justify-center items-center">
                {/* <Loader title="Loading" /> */}
              </div>
            )}
            {!isLoading && tasks.length === 0 ? (
              <p className="text-red-700 leading-tight">
                {" "}
                No task has added.Please add a task
              </p>
            ) : (
              <>
                {tasks.map((task, index) => {
                  return (
                    <Task
                      key={task._id}
                      task={task}
                      index={index}
                      deleteTask={deleteTask}
                      getSingleTask={getSingleTask}
                      isEditing={isEditing}
                      updateTask={updateTask}
                      setToComplete={setToComplete}
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
