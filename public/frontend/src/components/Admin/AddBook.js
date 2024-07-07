import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');

  const addBook = async () => {
    try {
      const res = await axios.post('/api/admin/addBook', { name, author });
      console.log(res.data);
      setName('');
      setAuthor('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <input
        type="text"
        placeholder="Book Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={addBook}>Add Book</button>
    </div>
  );
};

export default AddBook;
