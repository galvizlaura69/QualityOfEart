import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";

export const TablaLevel: React.FC = () => {
  const data = [
    {
      time: "08:30",
      date: "2024-09-27",
      level: "Alto",
      alert: "Alerta roja",
    },
    {
      time: "09:15",
      date: "2024-09-27",
      level: "Medio",
      alert: "Alerta amarilla",
    },
    {
      time: "10:00",
      date: "2024-09-27",
      level: "Bajo",
      alert: "Alerta verde",
    },
  ];

  return (
    <Table className="border border-gray-300">
      <TableHeader>
        <TableRow className="border-b border-gray-300">
          <TableHead className="border-r border-gray-300">Hora</TableHead>
          <TableHead className="border-r border-gray-300">Fecha</TableHead>
          <TableHead className="border-r border-gray-300">Nivel</TableHead>
          <TableHead>Alerta</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((entry, index) => (
          <TableRow key={index} className="border-b border-gray-300">
            <TableCell className="border-r border-gray-300">{entry.time}</TableCell>
            <TableCell className="border-r border-gray-300">{entry.date}</TableCell>
            <TableCell className="border-r border-gray-300">{entry.level}</TableCell>
            <TableCell>{entry.alert}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="border-t border-gray-300">
          <TableCell colSpan={4} className="text-right">
            Última actualización: 2024-09-27
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
