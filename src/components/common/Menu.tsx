import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/DropdownMenu';
import avatarImage from "../../assets/avatar.png";
import logo from '../../assets/logo.webp';

export const MenuApp: React.FC = () => {

  const handleRedirect = (path: string) => {
    window.location.href = path;
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setTimeout(() => {
      window.location.href = "/"; 
    }, 1000); 
  };

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  return (
    <nav className="bg-gradient-to-r sticky top-0 from-blue-300 via-green-400 to-green-600 py-3 px-14 shadow-md z-60">
      <div className="w-full mx-auto flex items-center justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleRedirect('/inicio')}
        >
             <img
                src={logo}
                alt="Avatar"
                className="w-20 h-20 rounded-full border-2 border-gray-300"
              />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="pl-5 gap-2 min-w-30 h-14 bg-transparent">
              <div className='block text-xl mr-4 leading-[1] text-green-300'>
                <p>Bienvenid@</p>
                <span className='text-lg text-white'>{user?.user?.name}</span>
              </div>
              <img
                src={avatarImage}
                alt="Avatar"
                className="w-12 h-12 rounded-full border-2 border-gray-300"
              />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleRedirect('/perfil')}>Ver Perfil</DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Cerrar Sesión</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
