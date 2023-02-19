import React from 'react';
import {useNavigate } from 'react-router-dom';

class CreateTodo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {title:'', description:'', status:'', from:'', to:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
        const { title, description, status, from, to } = this.state
        fetch("http://127.0.0.1:8000/api/todo",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                title: title,
                description: description,
                status: status,
                from: from,
                to: to
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
      this.props.navigate('/');
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
            <input type="Date" name="from" value={this.state.from} onChange={this.handleChange} />
              </label>
              <label>
            To:/
            <input type="Date" name="to" value={this.state.to} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}
function WithNavigate(props) {
  let navigate = useNavigate();
      return <CreateTodo {...props} navigate={navigate} />
    }
 
export default WithNavigate;