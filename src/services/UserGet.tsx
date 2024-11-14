import axios from 'axios';

export const UserGet  = async (email: string) => {
  const response = await axios.get(`http://localhost:3010/users/email/${email}`,
  );
  return response.data;
};