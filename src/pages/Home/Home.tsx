import { CardContent, DatePicker, Wrapper } from "@/components";
import { Card } from "@/components";
import { TablaLevel } from "@/components/common/TableLevel";
import LineChart from "@/components/common/LineChart";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import BarChart from "@/components/common/BarChart";
import { SensorGet } from "@/services/SensorGet";

interface LightBulbIconProps {
  color: string;
  label: string;
}

const LightBulbIcon: React.FC<LightBulbIconProps> = ({ color, label }) => (
  <div className="flex items-center">
    <div className={`w-4 h-4 rounded-full ${color} mr-2`} />
    <span>{label}</span>
  </div>
);

export const Home: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>("todos");
  const [dateRange, setDateRange] = useState<any>("");
  const [sensorData, setSensorData] = useState<any>([]);


  
    const handleDateChange = (dateRange: any) => {
    if (dateRange) {
      const formattedDate = dateRange ? format(dateRange, 'yyyy-MM-dd') : 'N/A';
      setDateRange(formattedDate)
    }
  };

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await SensorGet(dateRange,selectedLevel);
        setSensorData(response?.sensorData);
      } catch (error) {
        console.error("Error al obtener los datos de los sensores:", error);
      }
    };
      fetchSensorData();
      const intervalId = setInterval(fetchSensorData, 3000);
    return () => clearInterval(intervalId);
  }, [selectedLevel, dateRange]);

  return (
    <Wrapper className="w-full ">
      <h1 className="text-[40px] font-bold text-center pb-7 text-primary-500">PANEL DE MONITOREO CO2</h1>
      <div className="grid gap-4 grid-cols-11 w-full">
        <div className="col-span-6">
          <Card className="max-h-screen">
            <h1 className="font-bold text-2xl text-center pb-7">Escala niveles del Co2</h1>
            <div className="grid grid-cols-1 gap-2 mb-5">
              <LightBulbIcon color="bg-green-500" label="Bajo" />
              <LightBulbIcon color="bg-yellow-500" label="Medio" />
              <LightBulbIcon color="bg-red-500" label="Alto" />
            </div>
            <div className="grid grid-cols-5 gap-2 mb-5 items-center">
              <div className="col-span-2">
                <DatePicker className="w-full" onChange={handleDateChange} />
              </div>
              <div className="col-span-2">
                <Select onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccione un nivel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="todos">todos</SelectItem>
                      <SelectItem value="bajo">bajo</SelectItem>
                      <SelectItem value="medio">medio</SelectItem>
                      <SelectItem value="alto">alto</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-1"></div>
            </div>
            <TablaLevel sensorData={sensorData} />
          </Card>
        </div>
        <div className="col-span-5">
          <Card className="mb-6">
            {<LineChart data={sensorData} /> }
          </Card>
          <Card>
            <CardContent>
           {<BarChart data={sensorData} /> }
           </CardContent>
          </Card>
        </div>
      </div>
    </Wrapper>
  );
};
