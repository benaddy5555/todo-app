import React, { useState } from "react";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const toggleComplete = () => {
    updateTodo(todo.id, { ...todo, completed: !todo.completed });
  };

  const handleSave = () => {
    updateTodo(todo.id, { ...todo, title });
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={handleSave}>💾</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={toggleComplete}
          />
          <span>{todo.title}</span>
          <div>
            <button onClick={() => setIsEditing(true)}>✏️</button>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
