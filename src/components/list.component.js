import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

const TodoList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://zyco.nl/api/all_tasks/';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    fetch(apiUrl)
    .then(response => response.json())
      .then(data => console.log(data));
    
  //   axios.get(proxyUrl + apiUrl, {
  //     headers: {
  //       'X-Requested-With': 'XMLHttpRequest'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setTodos(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>From</th>
            <th>To</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.status}</td>
              <td>{todo.from}</td>
              <td>{todo.to}</td>
              <td><button> <Link to={{ pathname: "/edit/" + todo.id }}>Edit</Link></button></td>
              <td><button onClick={() => this.delTodo(todo.id)}> &nbsp; Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TodoList;
