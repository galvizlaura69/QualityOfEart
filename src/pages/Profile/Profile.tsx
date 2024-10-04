import React, { useState } from "react";
import avatarImage from "../../assets/avatar.png";
import { Wrapper } from "@/components";
import { FaEdit } from "react-icons/fa";
import { Button } from "@/components";

export const Profile: React.FC = () => {
  const [name, setName] = useState<string>("Laura Galviz");
  const [email] = useState<string>("galvizlaura69@gmail.com");
  const [password, setPassword] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nombre actualizado:", name);
    console.log("Contraseña actualizada:", password);
    console.log("Sexo:", gender);
    console.log("Fecha de nacimiento:", birthDate);
    setIsEditing(false);
  };

  return (
    <Wrapper className="w-full ">
      <div className="flex">
        <div className="w-1/2 flex flex-col justify-center items-center p-6 bg-white shadow-md">
          <div className="flex gap-5 justify-between w-full">
            <h2 className="text-3xl font-bold mb-4 text-center text-primary-500">Perfil</h2>
            <div>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="mb-4 p-2 rounded-md text-gray-500 hover:bg-gray-100"
                >
                  <FaEdit size={20} />
                </button>
              )}
            </div>
          </div>
          <form onSubmit={handleUpdateProfile} className="w-full">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${!isEditing ? "bg-gray-100" : ""}`}
                placeholder="Ingresa tu nombre"
                required
                disabled={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                disabled
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="gender">
                Sexo
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${!isEditing ? "bg-gray-100" : ""}`}
                disabled={!isEditing}
              >
                <option value="" disabled>
                  Selecciona tu sexo
                </option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="birthDate">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                id="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${!isEditing ? "bg-gray-100" : ""}`}
                required
                disabled={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Nueva Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${!isEditing ? "bg-gray-100" : ""}`}
                placeholder="Ingresa tu nueva contraseña"
                required
                disabled={!isEditing}
              />
            </div>
            {isEditing && (
              <div className="flex flex-col gap-5 mt-4">
                <Button
                  type="submit"
                  className="w-full bg-primary-500 text-white font-bold py-2 rounded-md hover:bg-primary-300 transition"
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
          </form>
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
