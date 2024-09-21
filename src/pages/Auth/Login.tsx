import { Wrapper } from "@/components/common";
import fondo from '../../assets/fondo.jpg';
import { useState } from "react";
import { LoginForm, RegisterForm } from "@/components";

export const Login: React.FC = () => {

  const [isRegister, setIsRegister] = useState(false)

  return (
    <div className='relative flex min-h-screen w-full items-center'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${fondo})` }}
      />
      <div className='absolute inset-0 bg-gradient-to-r  from-green-400 to-green-600 opacity-30' />
      <Wrapper className="relative z-10 w-full">
        <div className='max-w-[38rem] m-auto flex flex-col rounded-br-[6rem] rounded-tl-[6rem] border border-[#B5B7C0] text-center sm:flex-row'>
          <div className='flex w-full flex-col justify-center rounded-br-[6rem] rounded-tl-[6rem] bg-white px-12 py-5'>
            <div className='mt-4'>
              <h2 className='text-green-700 title-2xl'>Bienvenid@</h2>
              <p className='text-base font-semibold text-[#676767]'>
                {!isRegister ? "Ingrese sus credenciales de acceso" : "Diligencie los campos requeridos"}
              </p>
            </div>
            <div className='mt-2 mb-5'>
              {!isRegister ?
                (
                  <>
                    <LoginForm />
                    <button onClick={() => { setIsRegister(true) }} className="text-sm text-[#676767]">
                      No tiene una cuenta <span className="hover:text-green-600">regitrese aqui</span>
                    </button>
                  </>
                ) :
                (<>
                  <RegisterForm/>
                  <button onClick={() => { setIsRegister(false) }} className="text-sm text-[#676767]">
                    Tiene una cuenta <span className="hover:text-green-600">ingrese aqui</span>
                  </button>
                </>)
              }
            </div>
          </div>
        </div>
        <div className='my-2 text-center pt-6'>
          <p className='text-[#ffffff] text-sm font-bold'>
            © 2024 Copyright QUALITY OF EART.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};
