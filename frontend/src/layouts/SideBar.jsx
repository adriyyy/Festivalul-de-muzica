import { Link } from "react-router-dom";
import { FaMusic, FaGuitar, FaHome, FaMagic } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-transparent z-30">
      <div className="flex justify-between items-center px-6 py-3 backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <FaMusic className="text-yellow-400 text-2xl" />
          <h1 className="text-xl font-bold text-white">Festival de Muzică</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-white">
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
      </div>
    </div>
  );
};

export default Sidebar;
