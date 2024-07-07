import axios from 'axios';

const getBooks = async () => {
  try {
    const res = await axios.get('/api/books');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export { getBooks };
