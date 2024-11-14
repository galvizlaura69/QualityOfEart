import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Button, Input } from "@/components/ui";
import { useNavigate } from 'react-router-dom';
import { UserGet } from '@/services/UserGet';
import { Alerts } from '../ui/Alert';

export const LoginForm: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' | null }>({ message: '', type: null });
  const [emailError, setEmailError] = useState<string>(''); 
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    if (!validateEmail(value)) {
      setEmailError('Por favor ingrese un correo electrónico válido');
    } else {
      setEmailError('');
    }
  };

  const handleSuccess = async (): Promise<void> => {
    setIsLoading(true);
    setAlert({ message: '', type: null });
    if (!validateEmail(email)) {
      setAlert({ message: 'Por favor ingrese un correo electrónico válido', type: 'error' });
      setIsLoading(false);
      return;
    }
    try {
      const response = await UserGet(email);
      if (response) {
        if (response?.user?.password === password) {
          localStorage.setItem('user', JSON.stringify(response));
          setAlert({ message: 'Login exitoso, redirigiendo...', type: 'success' });
          setTimeout(() => {
            navigate('/inicio');
          }, 2000);
        } else {
          setAlert({ message: 'La contraseña es incorrecta.', type: 'error' });
        }
      } else {
        setAlert({ message: 'Usuario no encontrado.', type: 'error' });
      }
    } catch (error: any) {
      setAlert({ message: error?.response?.data?.message || 'Error desconocido.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Ingrese su correo"
            value={email}
            onChange={handleEmailChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          />
          {emailError && <p className="text-sm text-red-600 mt-2">{emailError}</p>}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <FaEye className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Button
            className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 mb-6 text-lg"
            onClick={handleSuccess}
            disabled={isLoading || !email || !password}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </Button>
        </div>
      </form>
      {alert.message && (
        <Alerts title={alert.message} variant={alert.type === 'success' ? 'success' : 'error'} />
      )}
    </div>
  );
};
