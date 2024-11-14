import React, { useState, useEffect } from "react";
import avatarImage from "../../assets/avatar.png";
import { Wrapper } from "@/components";
import { FaEdit, FaEye } from "react-icons/fa";
import { Button, Input } from "@/components/ui";
import { UserUpdate } from "@/services/UserUdpdate";
import { Alerts } from "@/components/ui/Alert";

export const Profile: React.FC = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const [name, setName] = useState<string>(user?.user.name || "");
  const [email] = useState<string>(user?.user?.email || "");
  const [password, setPassword] = useState<string>(user?.user?.password || "");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [alert, setAlert] = useState<{ message: string; variant: 'error' | 'success' | 'info' } | null>(null);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !password.trim()) {
      setAlert({
        message: "El nombre y la contraseña son requeridos.",
        variant: "error"
      });
      return;
    }

    try {
      const updatedData = await UserUpdate(email, { name, password });
      console.log("Perfil actualizado:", updatedData);
      localStorage.setItem("user", JSON.stringify(updatedData));
      setAlert({
        message: "Perfil actualizado exitosamente",
        variant: "success"
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error al actualizar el perfil", error);

      setAlert({
        message: "Hubo un error al actualizar el perfil.",
        variant: "error"
      });
    }
  };

  return (
    <Wrapper className="w-full">
      <div className="flex">
        <div className="w-1/2 flex flex-col justify-center items-center p-6 bg-white shadow-md">
          <div className="flex justify-between items-end w-[80%] ">
            <h2 className="text-5xl font-bold text-primary-500 ">Perfil</h2>
            <div>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className=" rounded-md text-gray-500 hover:bg-gray-100"
                >
                  <FaEdit size={30} />
                </button>
              )}
            </div>
          </div>
         
          <form className="w-[80%]  mb-4 mt-5">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Ingrese su correo"
                value={email}
                disabled
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Ingrese su nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!isEditing}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-2">
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
                  disabled={!isEditing}
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
          </form>
          {alert && <Alerts title={alert.message} variant={alert.variant} />}
          {isEditing && (
            <div className="flex flex-col gap-5 w-[80%]">
              <Button
                type="submit"
                className="w-full bg-primary-500 text-white font-bold py-2 rounded-md hover:bg-primary-300 transition"
                onClick={handleUpdateProfile}
                disabled={!name.trim() || !password.trim()}
              >
                Actualizar Perfil
              </Button>
              <Button
                type="button"
                className="w-full bg-red-500 text-white font-bold py-2 rounded-md hover:bg-red-300 transition"
                onClick={() => setIsEditing(false)}
              >
                Cancelar
              </Button>
            </div>
          )}
        </div>
        <div className="w-1/2 flex justify-center items-center bg-gray-100">
          <img
            src={avatarImage}
            alt="Avatar"
            className="w-50 h-50 rounded-full border-2 border-gray-300"
          />
        </div>
      </div>
    </Wrapper>
  );
};
