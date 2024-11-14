import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Button, Input } from "@/components/ui"; 
import { RegisterUser } from '@/services/UserPost';
import { Alerts } from '../ui/Alert';

interface RegisterFormProps {
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;  
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ setIsRegister }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' | null }>({ message: '', type: null });
  const [emailError, setEmailError] = useState<string>(''); // Estado para el error del correo

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'email') {
      // Validación en tiempo real del correo
      if (!validateEmail(value)) {
        setEmailError('Por favor ingrese un correo electrónico válido');
      } else {
        setEmailError('');
      }
    }
  };

  // Validación del correo electrónico usando expresión regular
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ message: '', type: null }); // Reset alert state

    // Validar el correo electrónico antes de enviar
    if (!validateEmail(formData.email)) {
      setLoading(false);
      setAlert({ message: 'Por favor ingrese un correo electrónico válido', type: 'error' });
      return;
    }

    try {
      const response = await RegisterUser(formData);
      setAlert({ message: 'Usuario registrado con éxito', type: 'success' });
      console.log("User registered successfully:", response);
      setTimeout(() => {
        setIsRegister(false);  
        window.location.reload();  
      }, 2000); 
    } catch (err) {
      setAlert({ message: 'Error al registrar el usuario', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre completo*
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Ingrese su nombre"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo electrónico*
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Ingrese su correo"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
          {/* Mostrar error de correo en tiempo real */}
          {emailError && <p className="text-sm text-red-600 mt-2">{emailError}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña*
          </label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Ingrese su contraseña"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <FaEye className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>

        {alert.message && <Alerts title={alert.message} variant={alert.type || 'info'} />}

        <div className="mt-6">
          <Button
            type="submit"
            className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 mb-6 text-lg"
            disabled={loading || !formData.name || !formData.email || !formData.password}
          >
            {loading ? "Registrando..." : "Registrar"}
          </Button>
        </div>
      </form>
    </div>
  );
};
