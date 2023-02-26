// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// function EditTodo() {
//   const [todo, setTodo] = useState({ title: '', description: '', status: '', from: '', to: '' });
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`http://127.0.0.1:8000/api/todo/${id}`)
//       .then(res => res.json())
//       .then(todo => setTodo(todo));
//   }, [id]);

//   const handleChange = event => {
//     const { name, value } = event.target;
//     setTodo(prevTodo => ({ ...prevTodo, [name]: value }));
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     fetch(`http://127.0.0.1:8000/api/todo/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//       body: JSON.stringify(todo),
//     })
//       .then(() => navigate('/'))
//       .catch(error => console.error('Error:', error));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input type="text" name="title" value={todo.title} onChange={handleChange} />
//       </label>
//       <label>
//         Status:
//         <input type="text" name="status" value={todo.status} onChange={handleChange} />
//       </label>
//       <label>
//         Description:
//         <textarea type="text" name="description" value={todo.description} onChange={handleChange} />
//       </label>
//       <label>
//         From:
//         <input type="Date" name="from" value={todo.from} onChange={handleChange} />
//       </label>
//       <label>
//         To:
//         <input type="Date" name="to" value={todo.to} onChange={handleChange} />
//       </label>
//       <input type="submit" value="Save" />
//     </form>
//   );
// }

// export default EditTodo;
