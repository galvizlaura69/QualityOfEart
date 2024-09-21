import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { cn } from '@/lib/utils'; 

export const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {children}
    </Menu>
  );
};

export const DropdownMenuTrigger = ({ children }: { children: React.ReactNode }) => {
  return (
    <Menu.Button className="rounded-l-full rounded-r-none hover:bg-green-800 hover:border-green-300 border border-transparent inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-700 rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
      {children}
      <FaChevronDown className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
    </Menu.Button>
  );
};

export const DropdownMenuContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-2 px">{children}</div>
      </Menu.Items>
    </Transition>
  );
};

export const DropdownMenuItem = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={onClick}
          className={cn(
            active ? 'bg-green-500 text-white' : 'text-gray-900',
            'group flex rounded-md items-center w-full px-3 py-2 text-lg'
          )}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  );
};
