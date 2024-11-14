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
    console.log(title);
    console.log(description);
    console.log(dueDate);
  };

  return (
    <form onSubmit={add} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Task Title"
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        className="border border-black/10 rounded-lg bg-white/20 px-3 py-1.5"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border border-black/10 rounded-lg bg-white/20 px-3 py-1.5"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
