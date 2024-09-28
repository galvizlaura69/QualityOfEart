import { DatePickerWithRange, Wrapper } from "@/components"
import { Card } from "@/components"
import { TablaLevel } from "@/components/common/TableLevel"
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
    <Wrapper className="w-full ">
      <div className="grid gap-4 grid-cols-11 w-full">
        <div className="col-span-5">
          <Card className="max-h-screen">
          <p>imagen escala</p>
            <div className="grid grid-cols-5 gap-2 mb-5 items-center">
              <div className="col-span-2">
                <DatePickerWithRange />
              </div>
              <div className="col-span-2">
                <Select>
                  <SelectTrigger className="w-full">
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
            <TablaLevel />

          </Card>
        </div>
        <div className="col-span-6">
          <Card>
            <p>grafica1</p>
          </Card>
          <Card>
            <p>graficas2</p>
          </Card>
        </div>
      </div >
    </Wrapper >
  )
}