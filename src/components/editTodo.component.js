import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';

const EditTodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
    const { id } = useParams();
    const [book, setBook] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      fetch(`https://zyco.nl/api/edit_task/${id}`)
          .then(response => response.json())
          .then(result => {
              setTitle(result.data.title);
              setDescription(result.data.description);
              setStatus(result.data.status);
              setStartDate(result.data.start_date);
              setEndDate(result.data.end_date);
              console.log(result.data.title);  

          }
    )
      .catch(error => console.error(error));
  }, [id]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: title,
      description: description,
      status: status,
      start_date: startDate,
      end_date: endDate
    };
    fetch(`https://zyco.nl/api/update_task/${id}`, {
      method: 'PUT',
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
      .then(data => {
        console.log(data);
        navigate('/');
      })
      .catch(error => console.error(error));
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
              <Card>
           
                  <CardContent>
                      <Button> </Button>
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
                Update Todo
              </Button>
                      </form>
                  </CardContent>
              </Card>
          </Box>
        </Container>
        );
};
export default EditTodoForm;

            
