import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

const App: React.FC = () => {
  const [refresh, setRefresh] = React.useState(false);

  const handleAdd = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTodo onAdd={handleAdd} />
      <TodoList key={refresh ? 'refresh' : 'initial'} />
    </div>
  );
};

export default App;
