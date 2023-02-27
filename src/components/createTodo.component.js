import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const CreateTodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: title,
      description: description,
      status: status,
      start_date: startDate,
      end_date: endDate
    };
    fetch('https://zyco.nl/api/store_tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  };
   this.props.navigate('/')
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
        <Card>
          <CardContent>
            <form onSubmit={handleFormSubmit}>
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="Title"
                  variant="outlined"
                  fullWidth
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="Status"
                  variant="outlined"
                  fullWidth
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="Start Date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  value={startDate}
                  onChange={(event) => setStartDate(event.target.value)}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="End Date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  value={endDate}
                  onChange={(event) => setEndDate(event.target.value)}
                />
              </Box>
              <Button variant="contained" color="primary" type="submit">
                Create Todo
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default CreateTodoForm;
