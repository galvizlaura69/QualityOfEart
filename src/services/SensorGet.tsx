import axios from 'axios';

export const SensorGet  = async (date:any, level: string) => {
  const response = await axios.get(`http://localhost:3010/sensorDataFull?date=${date}&level=${level}`,
  );
  return response.data;
};
