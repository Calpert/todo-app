import logo from './logo.svg';
import './App.css';

export default function TodoApp() {
  return (
    <div className="App">
      <Header message="Todo List"/>
      <TodoForm />
      <TodoList />
    </div>
  );
}

