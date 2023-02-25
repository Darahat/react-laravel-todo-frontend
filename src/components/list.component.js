import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        todos: []
      };
    }
    delTodo(id) {
        
        fetch(`http://127.0.0.1:8000/api/todo/` + id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
            .then(res=>res.json())

          .then((result) => {
            console.log(id);
            console.log(result);
          }, (error) => {
            console.log(id);
            console.log(error);
        })
        
    }

      
  componentDidMount() {
      

    axios.get('https://zyco.nl/api/all_tasks/', {
     
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            todos: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  
    render() {
      const { error, isLoaded, todos } = this.state;
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
                              <td><button onClick={()=>this.delTodo(todo.id)}> &nbsp; Delete</button></td>
                          </tr>
                        ))}
                  </tbody>
            </table>
         
        );
      }
    }
}
  export default TodoList;