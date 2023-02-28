import React from "react";
import { Link } from 'react-router-dom';

 import { Table, Button, TableBody, TableCell, TableContainer, TableHead, TableRow,Paper } from "@mui/material";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      tasks: [],
      error: null
    };
  }
  delTask(id) {
    console.log(id);
    fetch('https://zyco.nl/api/del_task/' + id, {
      method: 'DELETE',
      header: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
      .then((result) => {
        console.log(result);
        if (result.data === 1) { // check if the task was successfully deleted
          // update state to remove the deleted task
          this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== id)
          }));
        }
    }, (error) => {
      console.log(error);
    }
      )
}
  componentDidMount() {
    fetch("https://zyco.nl/api/all_tasks")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            tasks: result.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
    );
  }

  render() {

    const { error, isLoaded, tasks } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else if (!Array.isArray(tasks)) {
      return <div>tasks is not an array</div>;
    } else {
      return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Status</TableCell>
                <TableCell align="center">Start Date</TableCell>
                <TableCell align="center">End Date</TableCell>
                <TableCell align="center">
                Edit
                </TableCell>
                <TableCell align="center">
                Delete
                </TableCell>

          </TableRow>
            </TableHead>
            <TableBody>
            
            {tasks.map(todo => (
              <TableRow key={todo.id}>
                <TableCell align="center">{todo.id}</TableCell>
                <TableCell align="center">{todo.title}</TableCell>
                <TableCell align="center">{todo.description}</TableCell>
                <TableCell align="center">{todo.status}</TableCell>
                <TableCell align="center">{todo.start_date}</TableCell>
                <TableCell align="center">{todo.end_date}</TableCell>
                <TableCell align="center"><Link style={{ textDecoration: 'none' }} to={{pathname:"/edit/"+todo.id}}><Button variant="contained" >Edit</Button> </Link> </TableCell>
                <TableCell align="center"><Button variant="contained" color="error" onClick={()=>this.delTask(todo.id)}>Delete</Button> </TableCell>
              </TableRow>
            ))}
            </TableBody>
            </Table>

            </TableContainer>
            
      );
    }
  }
}

export default TodoList;
