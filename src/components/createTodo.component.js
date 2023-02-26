import React from 'react';
// import {useNavigate } from 'react-router-dom';

class CreateTodo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {title:'', description:'', status:'', start_date:'', end_date:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
        const { title, description, status, start_date, end_date } = this.state
        fetch("https://zyco.nl/api/store_tasks",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
            },
            body: JSON.stringify({
                title: title,
                description: description,
                status: status,
                start_date: start_date,
                end_date: end_date
            }),
           
        }
        )
        .then((res) => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
            });
          console.log(result);
          
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
)
      event.preventDefault();
      // this.props.navigate('/');
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label>
            Status:
            <input type="text" name="status"  value={this.state.status} onChange={this.handleChange} />
              </label>
          <label>

            Description:
            <textarea type="text" name="description" value={this.state.description} onChange={this.handleChange} />
              </label>
              <label>
            From:
            <input type="Date" name="start_date" value={this.state.start_date} onChange={this.handleChange} />
              </label>
              <label>
            To:/
            <input type="Date" name="end_date" value={this.state.end_date} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}
// function WithNavigate(props) {
//   let navigate = useNavigate();
//       return <CreateTodo {...props} navigate={navigate} />
//     }
 
export default CreateTodo;