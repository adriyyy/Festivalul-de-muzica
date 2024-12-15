import { Link } from "react-router-dom";
import { FaMusic, FaGuitar, FaHome, FaMagic, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-transparent z-30">
      <div className="flex justify-between items-center px-6 py-2 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <FaMusic className="text-yellow-400 text-2xl" />
          <h1 className="text-xl font-bold text-white">Festival de Muzică</h1>
        </div>

        <nav className="hidden md:flex gap-6 text-white">
          <Link
            to="/"
            className="hover:text-yellow-400 transition duration-300 flex items-center gap-1"
          >
            <FaHome /> Acasă
          </Link>
          <Link
            to="/algoritm-explicat"
            className="hover:text-yellow-400 transition duration-300 flex items-center gap-1"
          >
            <FaGuitar /> Explicație
          </Link>
          <Link
            to="/genereaza"
            className="hover:text-yellow-400 transition duration-300 flex items-center gap-1"
          >
            <FaMagic /> Generează
          </Link>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            className="text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 text-white flex flex-col items-start px-6 py-4">
          <Link
            to="/"
            className="hover:text-yellow-400 transition duration-300 py-2 w-full"
            onClick={() => setIsOpen(false)}
          >
            <FaHome className="inline mr-2" /> Acasă
          </Link>
          <Link
            to="/algoritm-explicat"
            className="hover:text-yellow-400 transition duration-300 py-2 w-full"
            onClick={() => setIsOpen(false)}
          >
            <FaGuitar className="inline mr-2" /> Explicație
          </Link>
          <Link
            to="/genereaza"
            className="hover:text-yellow-400 transition duration-300 py-2 w-full"
            onClick={() => setIsOpen(false)}
          >
            <FaMagic className="inline mr-2" /> Generează
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
