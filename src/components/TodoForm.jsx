import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate) return;

    addTodo({ title, description, completed: false, dueDate, priority });
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={add} className="flex flex-col gap-5 p-6 bg-white shadow-lg rounded-lg border border-gray-200 max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Add New Task</h3>
      <input
        type="text"
        placeholder="Task Title"
        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all duration-150"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all duration-150"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all duration-150"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all duration-150"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold transition-all duration-150 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
      >
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
