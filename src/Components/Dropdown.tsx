import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import useOutsideClick from '../hooks/useOutsideClick';

type DropdownItem = {
  label: string;
  href?: string;
  icon?: string;
};

type DropdownProps = {
  label: string;
  items?: DropdownItem[];
};

const Dropdown = ({ label, items }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(dropdownRef, () => setOpen(false));

  return (
    <div ref={dropdownRef} className="relative ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-gray-400 hover:text-gray-700 cursor-pointer"
      >
        {label}
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && items && (
        <ul className="mt-2 bg-white rounded px-4 py-2 space-y-1 md:absolute md:top-full md:shadow md:z-50">
          {items.map((item) => (
            <li
              key={item.label}
              className="text-gray-400 hover:text-gray-700 cursor-pointer whitespace-nowrap flex items-center gap-2 px-2 py-1"
            >
              {item.icon && <img src={item.icon} alt={`${item.label} icon`} className="w-5 h-5" />}
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
