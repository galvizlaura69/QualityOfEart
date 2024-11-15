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
import { format } from "date-fns";


interface Sensor {
  _id: string;
  co2Level: number;
  createdAt: string;
  level: 'bajo' | 'medio' | 'alto';
}
interface SensorDataResponseProps {
  sensorData: Sensor[]
}

export const TablaLevel: React.FC<SensorDataResponseProps> = ({ sensorData }) => {

  const getLevelStyles = (level: string) => {
    switch (level) {
      case "alto":
        return { backgroundColor: "bg-red-600", textColor: "text-white", alertColor: "text-red-600" };
      case "medio":
        return { backgroundColor: "bg-yellow-600", textColor: "text-white", alertColor: "text-yellow-600" };
      case "bajo":
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
          <TableHead className="border-r border-gray-300 text-center">Valor C02</TableHead>
          <TableHead className="text-center">Alerta</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sensorData?.map((entry: any, index: number) => {
          const { backgroundColor, textColor } = getLevelStyles(entry.level);
          return (
            <TableRow key={index} className="border-b border-gray-300">
              <TableCell className="border-r border-gray-300 text-center">
                {format(new Date(entry.createdAt), "yyyy-MM-dd")}
              </TableCell>
              <TableCell className="border-r border-gray-300 text-center">
              {format(new Date(entry.createdAt), "hh:mm a")}
              </TableCell>
              <TableCell className="border-r border-gray-300 text-center">
                <span className={`${backgroundColor} ${textColor} rounded-2xl px-8 py-2 inline-block`}>
                  {entry.level.charAt(0).toUpperCase() + entry.level.slice(1)}
                </span>
              </TableCell>
              <TableCell className="border-r border-gray-300 text-center">{entry.co2Level}</TableCell>
              <TableCell className="text-center">
                {entry.level === "alto" ? (
                  <FaLightbulb className={`inline-block text-red-600 text-2xl`} />
                ) : entry.level === "medio" ? (
                  <FaRegLightbulb className={`inline-block text-yellow-600 text-2xl`} />
                ) : <span className="text-green-600">Sin alerta</span>}
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
