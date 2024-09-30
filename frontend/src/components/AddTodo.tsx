import React, { useState } from 'react';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;


interface AddTodoProps {
  onAdd: () => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    try {
      await axios.post('${apiUrl}/api/todos', { title, description, completed: false });
      setTitle('');
      setDescription('');
      onAdd();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
