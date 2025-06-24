import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const DropdownName = [
    {
      label: 'Features',
      children: [
        {
          label: 'TodoList',
          href: '/TodoList',
          icon: 'assets/images/icon-todo.svg',
        },
        {
          label: 'Calendar',
          href: '/Calendar',
          icon: 'assets/images/icon-calendar.svg',
        },
        {
          label: 'Reminders',
          href: '/Reminders',
          icon: 'assets/images/icon-reminders.svg',
        },
        {
          label: 'Planning',
          href: '/Planning',
          icon: 'assets/images/icon-planning.svg',
        },
      ],
    },
    {
      label: 'Company',
      children: [
        {
          label: 'History',
          href: '/history',
        },
        {
          label: 'Our Team',
          href: '/our-team',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
      ],
    },
    {
      label: 'Careers',
      href: '/careers',
      icon: 'assets/images/icon-careers.svg',
    },
    {
      label: 'About',
      href: '/about',
      icon: 'assets/images/icon-about.svg',
    }
  ];


  return (
    <nav className="bg-white shadow px-4 py-3 lg:px-35">
      <div className="flex items-center justify-between">
        {/* Left: Logo + Nav Items */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="shrink-0">
            <img src="assets/images/logo.svg" alt="logo" className="h-6 w-auto" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            {DropdownName.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <Dropdown label={item.label} items={item.children} />
                ) : (
                  <button
                    className="text-gray-400 hover:text-gray-700 cursor-pointer"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}

          </ul>
        </div>

        {/* Right: Login/Register */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-400 hover:text-gray-700 cursor-pointer">Login</button>
          <button className="px-4 py-1 border-2 rounded-xl text-gray-400 hover:text-gray-700 cursor-pointer">
            Register
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
          tabIndex={0}
        ></button>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-1/2 h-screen bg-white shadow-lg p-6 z-50 flex flex-col gap-4 md:hidden transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-black">
            <X size={35} />
          </button>
        </div>

          <ul className="flex flex-col gap-4">
            {DropdownName.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <Dropdown label={item.label} items={item.children} />
                </li>
              ) : (
                <li key={item.label}>
                  <button
                    className="text-gray-400 hover:text-gray-700 cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              )
            )}
          </ul>

        <div className="flex flex-col items-center mt-4 gap-4">
          <button className="text-gray-700 hover:text-gray-900 cursor-pointer hover:font-bold">
            Login
          </button>
          <button className="border-2 rounded-xl px-11 py-1 text-gray-700 hover:bg-black hover:text-white cursor-pointer transition-colors duration-200">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
