import { FaRecordVinyl, FaInfoCircle, FaStar } from "react-icons/fa";

const Introducere = () => {
  return (
    <div className="text-center mb-10">
      <h1
        className="text-6xl mt-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-500"
        style={{ fontFamily: "'Press Start 2P', sans-serif" }}
      >
        <div className="inline-block relative mr-4">
          {" "}
          <div className="p-4 rounded-full bg-gradient-to-r from-pink-300 to-purple-500 animate-pulse">
            <FaRecordVinyl className="text-white text-4xl" />
          </div>
          <div className="absolute inset-0 rounded-full border border-transparent animate-glow"></div>
        </div>
        CERINȚĂ
      </h1>

      <div className="p-6 bg-base-100 rounded-lg shadow-lg border border-base-300 mt-4">
        <div className="flex items-start">
          <FaInfoCircle
            className="mr-4 text-primary"
            style={{ fontSize: "32px" }}
          />{" "}
          {/* Dimensiune fixă în px */}
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            La un festival de muzică s-au înscris <strong>n</strong> melodii,
            codificate de la 1 la <strong>n</strong>, unde{" "}
            <strong>n &gt; 4</strong>. Scopul este să afișăm toate
            posibilitățile de ordonare a melodiilor în concurs.
          </p>
        </div>
        <div className="mt-6">
          <ul className="list-disc list-inside text-left text-lg space-y-3">
            <li className="transition-all duration-300 transform hover:translate-x-1">
              Melodia cu codul <strong>c1</strong> trebuie să evolueze{" "}
              <span className="text-accent bg-neutral p-1 rounded-lg font-mono hover:bg-accent hover:text-neutral">
                a doua
              </span>{" "}
              în listă.
            </li>
            <li className="transition-all duration-300 transform hover:translate-x-1">
              Melodia cu codul <strong>c2</strong> trebuie să evolueze{" "}
              <span className="text-accent bg-neutral p-1 rounded-lg font-mono hover:bg-accent hover:text-neutral">
                penultima
              </span>{" "}
              în listă.
            </li>
            <li className="transition-all duration-300 transform hover:translate-x-1">
              Ordonarea trebuie să respecte toate condițiile impuse de
              utilizator.
            </li>
          </ul>
        </div>
        <div className="mt-6 flex justify-center">
          <FaStar className="text-yellow-400 text-4xl mx-2 animate-bounce" />
          <FaStar className="text-pink-400 text-4xl mx-2 animate-bounce delay-150" />
          <FaStar className="text-blue-400 text-4xl mx-2 animate-bounce delay-300" />
        </div>
      </div>
    </div>
  );
};

export default Introducere;
