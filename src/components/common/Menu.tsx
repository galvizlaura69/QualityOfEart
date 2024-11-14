import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/DropdownMenu';
import avatarImage from "../../assets/avatar.png";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-500 mr-2"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C10.9 2 9.8 2.4 8.8 3.1C6.8 4.5 5.5 6.8 5.5 9C5.5 10.5 6.3 12.2 7.8 13.5C6.5 14.1 5.5 15.4 5.5 17C5.5 19.8 8.5 22 12 22C15.5 22 18.5 19.8 18.5 17C18.5 15.5 17.5 14.1 16.2 13.5C17.7 12.2 18.5 10.5 18.5 9C18.5 6.8 17.2 4.5 15.2 3.1C14.2 2.4 13.1 2 12 2ZM12 4C13.2 4 14.4 4.5 15.5 5.3C16.6 6.2 17.5 7.6 17.5 9C17.5 9.9 17.2 10.7 16.8 11.4C16.3 11.1 15.7 11 15 11C13.3 11 12 12.3 12 14C12 15 12.4 15.9 13 16.6C12.4 16.9 11.7 17 11 17C9.3 17 8 15.7 8 14C8 13.5 8.2 13 8.5 12.7C7.4 12.2 6.5 11.3 6.5 10.2C6.5 9 7.4 8.1 8.5 8.1C9.5 8.1 10.5 9 10.5 10C10.5 10.5 10.3 11 10 11C9.5 11 9 10.5 9 10C9 8.3 10.3 7 12 7C13.7 7 15 8.3 15 10C15 10.5 14.8 11 14.5 11C14.2 11 14 10.9 14 10.5C14 9.1 12.9 8 12 8C11.1 8 10.5 8.6 10.5 9.5C10.5 10 10.7 10.5 11 10.8C11.5 10.5 12 10 12 10C13.2 10 14.5 10.3 15.5 11C16.5 11.7 17 12.9 17 14C17 15.1 16 16 14 16C12 16 10 15.5 10 14.5C10 13 12 12 12 10C12 8.5 13.1 7.5 14 7C15.3 6.3 16.5 5.5 17 4.5C16.5 5 15.5 6 14 6C12.9 6 12 6.9 12 8C12 9.1 13 10 14 10C15 10 16 9 16 8C16 7 15 6 14 6C13.6 6 13.2 6 12.8 6.1C12.4 6.2 12 6.5 12 7C12 7.5 12.5 8 13 8C13.5 8 14 7.5 14 7C14 6.5 13.5 6 13 6C12.5 6 12 6.5 12 7Z" />
          </svg>
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
