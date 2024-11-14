// import React, { useState } from "react";
// import { useTodo } from "../context/TodoContext.js";

// function TodoItem({ todo }) {
//   const [isTodoEditable, setIsTodoEditable] = useState(false);
//   const [todoMsg, setTodoMsg] = useState(todo.todo);
//   const { updateTodo, deleteTodo, toggleComplete } = useTodo();

//   const editTodo = () => {
//     updateTodo(todo.id, { ...todo, todo: todoMsg });
//     setIsTodoEditable(false);
//   };
//   const toggleCompleted = () => {
//     //console.log(todo.id);
//     toggleComplete(todo.id);
//   };

//   return (
//     <div
//       className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
//         todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
//       }`}
//     >
//       <input
//         type="checkbox"
//         className="cursor-pointer"
//         checked={todo.completed}
//         onChange={toggleCompleted}
//       />
//       <input
//         type="text"
//         className={`border outline-none w-full bg-transparent rounded-lg ${
//           isTodoEditable ? "border-black/10 px-2" : "border-transparent"
//         } ${todo.completed ? "line-through" : ""}`}
//         value={todoMsg}
//         onChange={(e) => setTodoMsg(e.target.value)}
//         readOnly={!isTodoEditable}
//       />
//       {/* Edit, Save Button */}
//       <button
//         className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
//         onClick={() => {
//           if (todo.completed) return;

//           if (isTodoEditable) {
//             editTodo();
//           } else setIsTodoEditable((prev) => !prev);
//         }}
//         disabled={todo.completed}
//       >
//         {isTodoEditable ? "📁" : "✏️"}
//       </button>
//       {/* Delete Todo Button */}
//       <button
//         className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
//         onClick={() => deleteTodo(todo.id)}
//       >
//         ❌
//       </button>
//     </div>
//   );
// }

// export default TodoItem;







import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [priority, setPriority] = useState(todo.priority);
  const [dueDate, setDueDate] = useState(todo.dueDate);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, title, description, priority, dueDate });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  // Determine the background color based on the status of the task
  const getBackgroundColor = () => {
    if (todo.completed) return "bg-[#d3f9d8]"; // Very light green for completed
    if (new Date(dueDate) < new Date()) return "bg-[#ffcccc]"; // Light red for overdue
    return "bg-[#fff9d8]"; // Very light yellow for upcoming
  };

  return (
    <div
      className={`flex flex-col border border-black/10 rounded-lg px-3 py-2 gap-y-3 shadow-sm duration-300 text-black w-full max-w-md ${getBackgroundColor()}`}
    >
      <div className="flex justify-between items-center">
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => {
            if (todo.completed) return;

            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
      <input
        type="text"
        className={`border outline-none w-full bg-white/20 rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <textarea
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border border-black/10 rounded-lg px-3 py-1.5"
        disabled={todo.completed}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border border-black/10 rounded-lg px-3 py-1.5"
        disabled={todo.completed || !isTodoEditable}
      />
    </div>
  );
}

export default TodoItem;
