import axios from 'axios';

const getUserTransactions = async (userId) => {
  try {
    const res = await axios.get(`/api/user/transactions/${userId}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export { getUserTransactions };
