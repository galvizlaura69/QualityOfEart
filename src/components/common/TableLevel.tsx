import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { FaRegLightbulb, FaLightbulb } from 'react-icons/fa'; 

interface TablaLevelProps {
  selectedLevel: string;
  dateRange: { from: Date | undefined; to: Date | undefined };
}

export const TablaLevel: React.FC<TablaLevelProps> = ({ selectedLevel, dateRange }) => {
  const data = [
    { time: "08:30", date: "2024-09-27", level: "Alto", alert: "Alerta roja" },
    { time: "09:15", date: "2024-09-27", level: "Medio", alert: "Alerta amarilla" },
    { time: "10:00", date: "2024-09-27", level: "Bajo", alert: "Alerta verde" },
    { time: "11:30", date: "2024-09-28", level: "Alto", alert: "Alerta roja" },
    { time: "12:45", date: "2024-09-28", level: "Medio", alert: "Alerta amarilla" },
    { time: "14:00", date: "2024-09-29", level: "Bajo", alert: "Alerta verde" },
    { time: "15:30", date: "2024-09-29", level: "Alto", alert: "Alerta roja" },
  ];

  const filteredData = data.filter(entry => {
    const entryDate = new Date(entry.date);
    const isWithinDateRange =
      (!dateRange.from || entryDate >= dateRange.from) &&
      (!dateRange.to || entryDate <= dateRange.to);

    const isLevelMatch =
      selectedLevel === "Todos" || entry.level === selectedLevel;

    return isWithinDateRange && isLevelMatch;
  });

  const getLevelStyles = (level: string) => {
    switch (level) {
      case "Alto":
        return { backgroundColor: "bg-red-600", textColor: "text-white", alertColor: "text-red-600" };
      case "Medio":
        return { backgroundColor: "bg-yellow-600", textColor: "text-white", alertColor: "text-yellow-600" };
      case "Bajo":
        return { backgroundColor: "bg-green-600", textColor: "text-white", alertColor: "text-green-600" };
      default:
        return { backgroundColor: "", textColor: "", alertColor: "" };
    }
  };

  return (
    <Table className="border border-gray-300">
      <TableHeader>
        <TableRow className="border-b border-gray-300">
          <TableHead className="border-r border-gray-300 text-center">Hora</TableHead>
          <TableHead className="border-r border-gray-300 text-center">Fecha</TableHead>
          <TableHead className="border-r border-gray-300 text-center">Nivel</TableHead>
          <TableHead className="text-center">Alerta</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredData.map((entry, index) => {
          const { backgroundColor, textColor, alertColor } = getLevelStyles(entry.level);
          return (
            <TableRow key={index} className="border-b border-gray-300">
              <TableCell className="border-r border-gray-300 text-center">{entry.time}</TableCell>
              <TableCell className="border-r border-gray-300 text-center">{entry.date}</TableCell>
              <TableCell className="border-r border-gray-300 text-center">
                <span className={`${backgroundColor} ${textColor} rounded-2xl px-8 py-2 inline-block`}>
                  {entry.level}
                </span>
              </TableCell>
              <TableCell className="text-center">
                {entry.alert === "Alerta roja" ? (
                  <FaLightbulb className={`inline-block text-red-600 text-2xl`} /> 
                ) : entry.alert === "Alerta amarilla" ? (
                  <FaRegLightbulb className={`inline-block text-yellow-600 text-2xl`} /> 
                ) : "Sin alerta"} 
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow className="border-t border-gray-300">
          <TableCell colSpan={4} className="text-right">
            Última actualización: 2024-09-29
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
