import { DatePickerWithRange, Wrapper } from "@/components"

export const Home: React.FC = () => {

  return (
    <Wrapper>
      <div className="flex w-full ">
        <div className=" w-[40%] h-[53rem]">
          <p>imagen escala</p>
          <DatePickerWithRange/>
          <p>Filtro por escala</p>
          <p>tabla con filtros</p>
        </div>
        <div className=" w-[60%] h-[53rem]">
          <p>graficas dona</p>
          <p>graficas linea</p>
        </div>
      </div >
    </Wrapper >
  )
}