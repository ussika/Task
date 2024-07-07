import axios from 'axios';

const getUser = async (userId) => {
  try {
    const res = await axios.get(`/api/user/${userId}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export { getUser };
