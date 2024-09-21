import { Wrapper } from "@/components"

export const Home: React.FC = () => {

  return (
    <Wrapper>
      <div className="flex w-full ">
        <div className=" w-[40%] h-[53rem]">
          <p>tabla con filtros</p>
          <p>Filtro por fecha</p>
          <p>Filtro por escala</p>
        </div>
        <div className=" w-[60%] h-[53rem]">
          <p>graficas </p>
        </div>
      </div >
    </Wrapper >
  )
}