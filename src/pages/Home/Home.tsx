import { DatePickerWithRange, Wrapper } from "@/components";
import { Card } from "@/components";
import { TablaLevel } from "@/components/common/TableLevel";
import LineChart from "@/components/common/LineChart"; // Asegúrate de que la ruta sea correcta
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import React, { useState } from "react";
import BarChart from "@/components/common/BarChart";

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
  const [selectedLevel, setSelectedLevel] = useState<string>("Todos");
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  });

  const data = [
    { time: "08:30", date: "2024-09-27", level: "Alto", alert: "Alerta roja" },
    { time: "09:15", date: "2024-09-27", level: "Medio", alert: "Alerta amarilla" },
    { time: "10:00", date: "2024-09-27", level: "Bajo", alert: "Alerta verde" },
    { time: "11:30", date: "2024-09-28", level: "Alto", alert: "Alerta roja" },
    { time: "12:45", date: "2024-09-28", level: "Medio", alert: "Alerta amarilla" },
    { time: "14:00", date: "2024-09-29", level: "Bajo", alert: "Alerta verde" },
    { time: "15:30", date: "2024-09-29", level: "Alto", alert: "Alerta roja" },
  ];

  // Filtra los datos según el rango de fechas y el nivel seleccionado
  const filteredData = data.filter(entry => {
    const entryDate = new Date(entry.date);
    const isWithinDateRange =
      (!dateRange.from || entryDate >= dateRange.from) &&
      (!dateRange.to || entryDate <= dateRange.to);

    const isLevelMatch =
      selectedLevel === "Todos" || entry.level === selectedLevel;

    return isWithinDateRange && isLevelMatch;
  });

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
                <DatePickerWithRange className="w-full" />
              </div>
              <div className="col-span-2">
                <Select onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccione un nivel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Todos">Todos</SelectItem>
                      <SelectItem value="Bajo">Bajo</SelectItem>
                      <SelectItem value="Medio">Medio</SelectItem>
                      <SelectItem value="Alto">Alto</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-1"></div>
            </div>
            <TablaLevel selectedLevel={selectedLevel} dateRange={dateRange} />
          </Card>
        </div>
        <div className="col-span-5">
          <Card className="mb-6">
            <LineChart data={filteredData} />
          </Card>
          <Card>
            <BarChart  data={filteredData}/>
          </Card>
        </div>
      </div>
    </Wrapper>
  );
};
