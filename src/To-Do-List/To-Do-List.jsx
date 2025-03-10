import React, { useState, useEffect } from "react";
import { loadTasks, saveTasks } from "./LocalStorage.js";
import styles from "./To-Do-List.module.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Capturing events in the document (body)
  useEffect(() => {
    function handleKeyDown(event) {
      // If user clicks on Forward Slash then the input field will be toggled
      if (event.key === "/") {
        event.preventDefault();
        const input = document.querySelector(`.${styles.taskInput}`);
        if (input) input.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Local storage logic
  useEffect(() => {
    const savedTasks = loadTasks();
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      saveTasks(tasks);
    }
  }, [tasks]);

  ////////////////////////////////////

  const inputChange = (event) => setNewTask(event.target.value);

  // A function add a task
  function addTask() {
    // If the task input is not empty
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    } else {
      // Alert the user that they have to enter a task
      window.alert("Please enter a task.");
    }
  }

  // A function to delete a task
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    // Local storage logic
    if (updatedTasks.length === 0) {
      localStorage.removeItem("tasks");
    } else {
      saveTasks(updatedTasks);
    }
  }

  // A function to move a task up
  function moveTaskUp(index) {
    // Checks if the current task index is bigger than 0 (not at the top)
    if (index > 0) {
      const updatedTasks = [...tasks];
      // Swaps the current task with the task below it
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  // A function to move a task down
  function moveTaskDown(index) {
    // Checks if the current task index is smaller than the last task index (not at the bottom)
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      // Swaps the current task with the task above it
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  // A function to edit a task
  function editTask(index) {
    
    //  Prompting the user for a new name for the task
    const updatedTask = window.prompt("Enter a new task name");
    
    // Checking if user input is not empty
    if(updatedTask.trim() !== "") {
        const updatedTasks = [...tasks];
        updatedTasks[index] = updatedTask;
        setTasks(updatedTasks);
    }

    // Checking if user clicked on cancel in the prompt
    if(updatedTask === null || updatedTask.trim() === "") return;
  }

  // The HTML
  return (
    <div className={styles.container}>
      {/* The title */}
      <h1>To-Do-List</h1>

      {/* User input div */}
      <div>
        <input
          type="text"
          value={newTask}
          onChange={inputChange}
          placeholder="Enter a task"
          className={styles.taskInput}
          onKeyDown={(event) => {
            // If user clicks "Enter" it will add a task
            if (event.key === "Enter") addTask();

            // If user clicks "Esc" it will un toggle the input field
            if (event.key === "Escape") event.target.blur();
          }}
        />

        <button onClick={addTask} className={styles.addButton}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>

      {/* Task list */}
      <ol>
        {/* Returns an array */}
        {tasks.map((task, index) => (
          // Creates an individual list item for each task
          <li key={index}>
            <span className={styles.text}>{task}</span>

            {/* Delete button */}
            <button className={styles.deleteButton} onClick={() => deleteTask(index)}>
              <i className="fa-solid fa-trash"></i>
            </button>

            {/* Edit button */}
            <button className={styles.editButton} onClick={() => editTask(index)}>
                <i class="fa-solid fa-pen-to-square"></i>
            </button>

            {/* Move up button */}
            <button className={styles.moveButton} onClick={() => moveTaskUp(index)}>
              <i className="fa-solid fa-arrow-up"></i>
            </button>

            {/* Move down button */}
            <button className={styles.moveButton} onClick={() => moveTaskDown(index)}>
              <i className="fa-solid fa-arrow-down"></i>
            </button>

          </li>
        ))}
      </ol>
    </div>
  );
}

export default App