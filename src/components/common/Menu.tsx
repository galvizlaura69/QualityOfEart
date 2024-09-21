import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/DropdownMenu';
import { FaUserCircle } from 'react-icons/fa';

export const MenuApp: React.FC = () => {

  const handleRedirect = (path: string) => {
    window.location.href = path;
  };

  return (
    <nav className="bg-gradient-to-r from-blue-300 via-green-400 to-green-600 py-3 px-14 shadow-md">
      <div className="w-full mx-auto flex items-center justify-between  ">
        <div
          className="text-white text-lg font-semibold cursor-pointer"
          onClick={() => handleRedirect('/inicio')}
        >
          LOGO
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className=" pl-5 gap-2 min-w-30 h-14 bg-transparent">
              <div className='block text-xl mr-4 leading-[1] text-green-300'>
                <p>Bienvenid@</p>
                <span className='text-lg text-white'>Laura Galviz</span>
              </div>
              <FaUserCircle size={45} style={{ color: '#ffffff' }} />
            </Button>

          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleRedirect('/perfil')}>Ver Perfil</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleRedirect('/')}>Cerrar Sesión</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
