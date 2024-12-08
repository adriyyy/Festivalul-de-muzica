import { useEffect, useState } from "react";
import { FaMusic } from "react-icons/fa";
import { Link } from "react-router-dom";
import VerticalSlider from "../components/VerticalSlider";

const MainPage = () => {
  const [showGuitars, setShowGuitars] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowGuitars(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative overflow-hidden flex flex-col md:flex-row justify-center items-center min-h-screen bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat">
      <VerticalSlider />

      <div className="relative flex flex-col justify-center items-center md:items-start w-full max-w-[1200px] z-20 px-6">
        <h1 className="text-5xl font-extrabold mt-3 bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent text-center md:text-left flex items-center gap-3 hover:glow transition duration-300">
          <FaMusic className="text-yellow-400" /> Festivalul de Muzică
        </h1>
        <p className="mt-4 text-lg text-center md:text-left text-white">
          Bine ai venit pe pagina noastră. Haide să combinăm informatica cu arta
          muzicii
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-6">
          <Link to="/algoritm-explicat">
            <button className="btn btn-lg btn-outline btn-secondary hover:scale-105 transition-transform">
              Mergi la Explicație
            </button>
          </Link>
          <Link to="/genereaza">
            <button className="btn btn-lg btn-secondary hover:scale-105 transition-transform">
              Generează
            </button>
          </Link>
        </div>
      </div>

      <div
        className={`absolute bottom-[-50px] right-[20px] transform ${
          showGuitars ? "translate-y-0 rotate-[20deg]" : "translate-y-60"
        } transition-transform duration-700 ease-bounce hidden md:block`}
      >
        <img
          src="/images/Guitar1.png"
          alt="Guitar 1"
          className="w-[500px] h-auto z-10"
        />
      </div>
      <div
        className={`absolute bottom-[-50px] right-[-60px] transform ${
          showGuitars ? "translate-y-0 -rotate-[15deg]" : "translate-y-60"
        } transition-transform duration-700 ease-bounce delay-200 hidden md:block`}
      >
        <img
          src="/images/Guitar2.png"
          alt="Guitar 2"
          className="w-[500px] h-auto z-0"
        />
      </div>
    </div>
  );
};

export default MainPage;
