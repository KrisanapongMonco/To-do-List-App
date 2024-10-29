import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // นำเข้าไฟล์ CSS ที่สร้างไว้

const API_URL = 'https://localhost:7208/api/Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async () => {
    if (!newTodo) return;
    try {
      await axios.post(API_URL, { title: newTodo, isCompleted: false });
      setNewTodo('');
      fetchTodos();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const toggleCompletion = async (todo) => {
    try {
      await axios.put(`${API_URL}/${todo.id}`, {
        ...todo,
        isCompleted: !todo.isCompleted,
      });
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const startEditing = (todo) => {
    setEditId(todo.id);
    setEditText(todo.title);
  };

  const cancelEditing = () => {
    setEditId(null);
    setEditText('');
  };

  const saveEdit = async (id) => {
    console.log('Edit data:', { id, title: editText });
  
    try {
      await axios.put(`${API_URL}/${id}`, {
        id: id, // เพิ่ม id ใน Payload
        title: editText,
        isCompleted: todos.find((todo) => todo.id === id).isCompleted,
      });
      setEditId(null);
      setEditText('');
      fetchTodos();
    } catch (error) {
      console.error('Error saving edit:', error);
    }
  };  

  return (
    <div className="todo-container">
      <h1>To-do List</h1>
      <div>
        <input
          type="text"
          className="todo-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="todo-button" onClick={addTodo}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                />
                <button className="save-button" onClick={() => saveEdit(todo.id)}>
                  Save
                </button>
                <button className="cancel-button" onClick={cancelEditing}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span
                  className={todo.isCompleted ? 'completed' : ''}
                  onClick={() => toggleCompletion(todo)}
                >
                  {todo.title}
                </span>
                <button className="edit-button" onClick={() => startEditing(todo)}>
                  Edit
                </button>
                <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
