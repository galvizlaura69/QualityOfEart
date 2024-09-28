import { DatePickerWithRange, Wrapper } from "@/components"
import { Card } from "@/components"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select"

export const Home: React.FC = () => {

  return (
    <Wrapper className="w-full">
      <div className="grid gap-4 grid-cols-11 w-full">
        <Card className="col-span-5">
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-2">
              <DatePickerWithRange />
            </div>
            <div className="col-span-1">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Seleccione un nivel" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Todos</SelectItem>
                  <SelectItem value="blueberry">Bajo</SelectItem>
                  <SelectItem value="banana">Medio</SelectItem>
                  <SelectItem value="apple">Alto</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            </div>
            <div className="col-span-1">
              <p>Limpiar filtro</p>
            </div>
          </div>
          <p>tabla con filtros</p>
        </Card>
        <Card className="col-span-6">
          <p>imagen escala</p>
          <p>graficas dona</p>
          <p>graficas linea</p>
        </Card>
      </div >
    </Wrapper >
  )
}