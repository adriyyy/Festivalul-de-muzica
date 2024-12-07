import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa"; // Icon pentru pagina Not Found

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="text-center text-white p-6 rounded-lg shadow-lg bg-black bg-opacity-50">
        <FaExclamationTriangle className="text-6xl mb-4" />
        <h1 className="text-6xl font-bold mb-4">Pagina Nu A Fost Găsită</h1>
        <p className="text-xl mb-6">
          Ne pare rău, dar pagina pe care o căutați nu există.
        </p>
        <Link
          to="/"
          className="btn btn-primary text-lg transform hover:scale-105 transition-all ease-in-out"
        >
          Mergi la Acasă
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
