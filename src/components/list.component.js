import React from "react";

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
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(todo => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.status}</td>
                <td>{todo.start_date}</td>
                <td>{todo.end_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }
}

export default TodoList;
