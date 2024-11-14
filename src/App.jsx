import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

import { TodoProvider } from "./context";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const getFilteredTodos = (status) => {
    const now = new Date();
    return todos.filter((todo) => {
      if (status === "completed") return todo.completed;
      if (status === "upcoming") return !todo.completed && new Date(todo.dueDate) > now;
      if (status === "overdue") return !todo.completed && new Date(todo.dueDate) < now;
      return true;
    });
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <Search todos = {todos}/>      
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center">Taskify</h1>
          <TodoForm />

          <h2>Upcoming Tasks</h2>
          <div className="space-y-4">
            {getFilteredTodos("upcoming").map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>

          <h2>Overdue Tasks</h2>
          <div className="space-y-4">
            {getFilteredTodos("overdue").map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>

          <h2>Completed Tasks</h2>
          <div className="space-y-4">
            {getFilteredTodos("completed").map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;