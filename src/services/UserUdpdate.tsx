import axios from 'axios';

interface Data {
  name: string,
  password:string
}

export const UserUpdate = async (email:string, data: Data) => {
    const response = await axios.put(`http://localhost:3010/users/email/${email}`,
        {
            name: data.name,
            password: data.password
        }
    );
    return response.data;
};
