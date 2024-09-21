
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Button, Input } from "@/components/ui"; 

export const LoginForm: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-letf text-gray-700">
            Correo electrónico
          </label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Ingrese su correo" 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <div className="relative">
            <Input 
              id="password" 
              type={passwordVisible ? 'text' : 'password'} 
              placeholder="Ingrese su contraseña" 
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            />
            <div 
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" 
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <FaEye className="h-5 w-5 text-gray-500" />
              ) : (
                <FaEye className="h-5 w-5 text-gray-500" />
              )}
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Button className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 mb-6 text-lg">
            Iniciar sesión
          </Button>
        </div>
      </form>
    </div>
  );
};
