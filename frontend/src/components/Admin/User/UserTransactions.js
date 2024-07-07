import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserTransactions = ({ userId }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get(`/api/user/transactions/${userId}`);
        setTransactions(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTransactions();
  }, [userId]);

  return (
    <div>
      <h2>User Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            Book: {transaction.book.name} - Due Date: {new Date(transaction.dueDate).toLocaleDateString()} - Transaction Type: {transaction.transactionType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserTransactions;
