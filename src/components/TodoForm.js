import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Ajouter une nouvelle tâche..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TodoForm;
