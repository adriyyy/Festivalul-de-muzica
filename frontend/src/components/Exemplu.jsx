import { useState } from "react";
import { MdLightbulbOutline } from "react-icons/md";

const Exemplu = () => {
  const [hovered, setHovered] = useState("");
  const glowEffect =
    "transition duration-300 text-green-400 animate-glow transition-transform transform hover:scale-105 hover:text-accent";
  return (
    <div className="p-6 bg-base-100 rounded-lg shadow-lg border border-base-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="p-6 bg-base-100 rounded-lg shadow-lg border border-base-300">
          <h2
            className="text-4xl font-bold text-primary mb-4 flex items-center transition-transform transform hover:scale-105 hover:text-accent"
            style={{ fontFamily: "'Press Start 2P', sans-serif" }}
          >
            <MdLightbulbOutline className="mr-2 text-yellow-500" />
            Exemplul explicat pas cu pas
          </h2>
          <p className="text-lg leading-relaxed">
            Avem{" "}
            <span
              className={`${hovered === "n" ? glowEffect : ""}`}
              onMouseEnter={() => setHovered("n")}
              onMouseLeave={() => setHovered("")}
            >
              n
            </span>{" "}
            melodii în concurs, iar melodiile{" "}
            <span
              className={`${hovered === "c1" ? glowEffect : ""}`}
              onMouseEnter={() => setHovered("c1")}
              onMouseLeave={() => setHovered("")}
            >
              c1
            </span>{" "}
            și{" "}
            <span
              className={`${hovered === "c2" ? glowEffect : ""}`}
              onMouseEnter={() => setHovered("c2")}
              onMouseLeave={() => setHovered("")}
            >
              c2
            </span>{" "}
            trebuie să respecte anumite condiții:
          </p>
          <ul className="list-disc list-inside mt-4 text-lg space-y-3">
            <li className="transition-all duration-300 transform hover:translate-x-1">
              <span className="font-bold">c1</span> trebuie să fie pe al doilea
              loc.
            </li>
            <li className="transition-all duration-300 transform hover:translate-x-1">
              <span className="font-bold ">c2</span> trebuie să fie pe
              penultimul loc.
            </li>
            <li className="transition-all duration-300 transform hover:translate-x-1">
              Restul melodiilor pot fi ordonate liber.
            </li>
          </ul>
        </div>

        {/* Coloana dreaptă */}
        <div className="p-6 bg-black rounded-lg shadow-lg border border-green-500">
          <h2
            className="text-3xl font-bold text-green-400 mb-4 text-center"
            style={{
              fontFamily: "'VT323', monospace",
              textShadow: "0 0 10px #00ff00",
            }}
          >
            Rezultate posibile
          </h2>
          <div
            className="text-green-400 text-lg font-mono leading-relaxed"
            style={{
              fontFamily: "'VT323', monospace",
              textShadow: "0 0 5px #00ff00, 0 0 10px #00ff00",
            }}
          >
            <pre>
              1. 1 3 2 5 4{"\n"}
              2. 1 3 4 5 2{"\n"}
              3. 2 3 1 5 4{"\n"}
              4. 2 3 4 5 1{"\n"}
              5. 4 3 1 5 2{"\n"}
              6. 4 3 2 5 1{"\n"}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exemplu;
