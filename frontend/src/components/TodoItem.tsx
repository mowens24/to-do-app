import React from 'react';

interface TodoItemProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, description, completed, toggleComplete, deleteTodo }) => {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => toggleComplete(id)}>
        {completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
