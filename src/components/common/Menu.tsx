import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

export const MenuApp: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRedirect = (path: string) => {
    window.location.href = path;
  };

  return (
    <nav className="bg-green-500 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div
          className="text-white text-lg font-semibold cursor-pointer"
          onClick={() => handleRedirect('/')}
        >
          LOGO
        </div>

      </div>
    </nav>
  );
};
