import axios from 'axios';

export const UserDeleted  = async (email: string) => {
  const response = await axios.put(`http://localhost:3010/users/emailDeleted/${email}`,
  );
  return response.data;
};