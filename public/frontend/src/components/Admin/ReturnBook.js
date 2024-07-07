import React, { useState } from 'react';
import axios from 'axios';

const ReturnBook = () => {
  const [userId, setUserId] = useState('');
  const [bookId, setBookId] = useState('');

  const returnBook = async () => {
    try {
      const res = await axios.post('/api/admin/returnBook', { userId, bookId });
      console.log(res.data);
      setUserId('');
      setBookId('');
      alert('Book returned successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Return Book</h2>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      <button onClick={returnBook}>Return Book</button>
    </div>
  );
};

export default ReturnBook;
