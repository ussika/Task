import React, { useState } from 'react';
import axios from 'axios';

const RemoveBook = () => {
  const [bookId, setBookId] = useState('');

  const removeBook = async () => {
    try {
      await axios.delete(`/api/admin/removeBook/${bookId}`);
      setBookId('');
      alert('Book removed successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Remove Book</h2>
      <input
        type="text"
        placeholder="Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      <button onClick={removeBook}>Remove Book</button>
    </div>
  );
};

export default RemoveBook;
