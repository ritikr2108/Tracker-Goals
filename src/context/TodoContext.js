// import { createContext, useContext } from "react";

// export const TodoContext = createContext({
//   todos: [
//     {
//       id: 1,
//       todo: " Todo msg",
//       completed: false,
//     },
//   ],
//   addTodo: (todo) => {},
//   updateTodo: (id, todo) => {},
//   deleteTodo: (id) => {},
//   toggleComplete: (id) => {},
// });

// export const useTodo = () => {
//   return useContext(TodoContext);
// };

// export const TodoProvider = TodoContext.Provider;






import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      title: "Sample Task",
      description: "This is a description of the task.",
      completed: false,
      dueDate: "2024-12-01",
      priority: "Medium",
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
