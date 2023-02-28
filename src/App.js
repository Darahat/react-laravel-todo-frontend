 import { Routes, Route,Link, BrowserRouter as Router  } from 'react-router-dom';
import TodoList from './components/list.component';
import CreateTodo from './components/createTodo.component';
import ResponsiveAppBar from './components/Toolbar.component';
import EditTodo from './components/editTodo.component';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ResponsiveAppBar>
        <ul>
            <li>
              <Link to="/">Todo List</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
             
          </ul>
      </ResponsiveAppBar>
   
         
         
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/create" element={<CreateTodo />} />
          <Route path="/edit/:id" element={<EditTodo />} />
          <Route path="/todo/del" element={<CreateTodo />} />
        </Routes>
      </div>
      </Router>
  
  );
}

export default App;
