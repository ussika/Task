import React, { useState } from 'react';
import axios from 'axios';

const IssueBook = () => {
  const [userId, setUserId] = useState('');
  const [bookId, setBookId] = useState('');
  const [dueDate, setDueDate] = useState('');

  const issueBook = async () => {
    try {
      const res = await axios.post('/api/admin/issueBook', { userId, bookId, dueDate });
      console.log(res.data);
      setUserId('');
      setBookId('');
      setDueDate('');
      alert('Book issued successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Issue Book</h2>
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
      <input
        type="date"
        placeholder="Due Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={issueBook}>Issue Book</button>
    </div>
  );
};

export default IssueBook;
