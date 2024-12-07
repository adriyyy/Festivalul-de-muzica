import { FaArrowRight } from "react-icons/fa";

const Suplimentar = () => {
  return (
    <div className="mt-10 p-6 bg-base-100 rounded-lg shadow-lg border border-base-300">
      <div className="p-6 bg-gradient-to-r from-primary to-secondary text-primary-content rounded-lg shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl">
        <h3
          className="text-3xl font-bold mb-4 text-white text-transparent bg-clip-text transition-all transform hover:scale-110 hover:text-accent"
          style={{ fontFamily: "'Press Start 2P', sans-serif" }}
        >
          <FaArrowRight className="inline-block mr-2 text-white transition-all transform hover:scale-125 hover:text-accent" />
          Exercițiu suplimentar:
        </h3>
        <p className="text-lg leading-relaxed text-neutral-content">
          Ne imaginăm aceeași cerință, însă în loc ca melodiile să fie
          codificate de la <span className="font-bold">1</span> la{" "}
          <span className="font-bold">n</span>, ele să aibă o atribută diferită.
          De exemplu, avem <span className="font-bold text-red-300">n = 5</span>{" "}
          și anume 5 genuri muzicale diferite introduse de utilizator:{" "}
          <span className="text-red-700">pop, rock, folk, rap, jazz</span>. Ne
          dorim ca pe a doua poziție să se regăsească{" "}
          <span className="text-neutral-700 font-bold">pop</span>, iar pe
          penultima <span className="text-neutral-700 font-bold">rap</span>.
        </p>
      </div>

      <div className="mt-6 p-6 bg-neutral text-neutral-content rounded-lg shadow-lg border border-base-300">
        <h4 className="text-2xl font-bold mb-4 transition-all transform hover:text-accent">
          Output:
        </h4>
        <ul className="text-lg font-mono text-center space-y-2">
          <li className="transition-all transform hover:text-accent hover:translate-x-2">
            rock pop folk rap jazz
          </li>
          <li className="transition-all transform hover:text-accent hover:translate-x-2">
            rock pop jazz rap folk
          </li>
          <li className="transition-all transform hover:text-accent hover:translate-x-2">
            folk pop rock rap jazz
          </li>
          <li className="transition-all transform hover:text-accent hover:translate-x-2">
            folk pop jazz rap rock
          </li>
          <li className="transition-all transform hover:text-accent hover:translate-x-2">
            jazz pop rock rap folk
          </li>
          <li className="transition-all transform hover:text-accent hover:translate-x-2">
            jazz pop folk rap rock
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Suplimentar;
