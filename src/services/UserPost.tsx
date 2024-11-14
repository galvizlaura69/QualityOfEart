import axios from 'axios';

interface Data {
  name: string,
  email:string,
  password:string
}

export const RegisterUser = async (data: Data) => {
    const response = await axios.post("http://localhost:3010/users",
        {
            name: data.name,
            email:data.email,
            password: data.password
        }
    );
    return response.data;
};
