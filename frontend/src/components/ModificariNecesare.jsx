import { FaCog } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";

const ModificariNecesare = () => {
  return (
    <div className="mt-10 p-6 bg-base-100 rounded-lg shadow-lg border border-base-300">
      <h3 className="text-2xl font-bold text-primary mb-4 transition-transform transform hover:scale-105 hover:text-accent">
        Modificarea necesară algoritmului:
      </h3>
      <p className="text-lg text-secondary-content  transition-all duration-300 transform hover:translate-x-1">
        Cu ajutorul acestui algoritm vom construi algoritmul pentru problema
        noastră. Însa ne va trebui cu o mică modificare. Poate vă întrebați: de
        ce scheletul de la permutări? Asta este pentru că ni se cer{" "}
        <span className="text-accent font-semibold">
          posibilitățile de stabilire a ordinelor de intrare
        </span>
        . Mai exact, ele trebuie{" "}
        <span className="text-accent font-semibold">permutate</span>.{" "}
        <strong>INSĂ</strong> ni se mai precizează faptul că modul în care sunt
        permutate acele &quot;coduri&quot; muzicale (codificate de la 1 la n)
        trebuie să respecte o anumită cerință. Deci nu vorbim de simple
        permutări, ci ele trebuie să evalueze o condiție.
      </p>

      <div className="mt-4 p-4 bg-neutral text-neutral-content rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-2xl">
        <p className="text-lg">
          Prin urmare, funcția{" "}
          <strong className="text-blue-300">&quot;validate&quot;</strong> va
          trebui să fie modificată.
        </p>
        <div className="mt-3 flex items-center justify-start space-x-3">
          <FaShuffle className="text-primary text-2xl animate-spin" />
          <FaCog className="text-primary text-2xl animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ModificariNecesare;
