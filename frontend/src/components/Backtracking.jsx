import { FaArrowRight, FaLink } from "react-icons/fa";

const Backtracking = () => {
  return (
    <div className="mt-10 p-6 bg-base-100 rounded-lg shadow-lg border border-base-300">
      <h3 className="text-2xl font-bold text-primary mb-4 flex items-center transition-all transform hover:scale-105 hover:text-accent group">
        <FaArrowRight className="mr-2 text-primary group-hover:text-accent transition-colors" />
        Cum putem implementa acest algoritm?
      </h3>
      <p className="text-lg text-secondary-content transition-all duration-300 transform hover:translate-x-1">
        Vedem cum peste tot <strong>3 (c1)</strong> se regăsește în poziția 2,
        iar <strong>5 (c2)</strong> se află peste tot pe poziția 4 (de menționat
        faptul că, pe parcursul întregii acestei explicații, indexăm vectorul de
        la <strong> 1</strong> și nu de la <strong>0</strong>).
      </p>
      <p className="mt-4 text-lg text-secondary-content transition-all duration-300 transform hover:translate-x-1">
        Înainte de toate, trebuie să cunoaștem bine noțiunea de{" "}
        <a
          href="https://www.pbinfo.ro/articole/16597/metoda-backtracking"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline font-bold hover:text-accent transition-colors group"
        >
          backtracking{" "}
          <FaLink className="inline-block ml-1 text-primary group-hover:text-accent transition-colors" />
        </a>
        , deoarece acest program folosește scheletul de la permutări.
      </p>
      <p className="mt-4 text-lg text-secondary-content transition-all duration-300 transform hover:translate-x-1">
        <strong className="transition-all transform hover:text-accent">
          Backtracking-ul
        </strong>{" "}
        este o tehnică de rezolvare a problemelor prin încercarea tuturor
        soluțiilor posibile. Se explorează un drum (o soluție parțială) până
        când devine evident că nu duce la o soluție validă, moment în care se
        revine (se face „backtrack”) pentru a explora alte opțiuni.
      </p>
      <p className="mt-4 text-lg text-secondary-content  transition-all duration-300 transform hover:translate-x-1">
        Pe baza acestei tehnici s-a construit și algoritmul de permutări în mod
        recursiv:
      </p>
      {/* Aici poți adăuga o descriere a algoritmului sau chiar un exemplu codificat. */}
    </div>
  );
};

export default Backtracking;
