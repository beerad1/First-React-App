// These are the imported functions for this module. The logo import seems to be deprecated, so it could probably be removed, or in the future it could be made relevant by utilizing it in the application. Though this could possibly be better implemented through a component.
import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";
// This is the start of the main function of the application, known as a component. Notably, it is not an IIFE like in the Twitter Clone's "main.js". It passes an unused arbitrary argument, a prop called "props". It's function seems to be to construct the html of the page when called, as per the export at the bottom of the page.

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  const [filter, setFilter] = useState('All');
  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;