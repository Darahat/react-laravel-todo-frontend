import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      tasks: [],
      error: null
    };
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
