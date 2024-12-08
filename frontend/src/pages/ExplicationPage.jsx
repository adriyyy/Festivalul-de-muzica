import Introducere from "../components/Introducere";
import Exemplu from "../components/Exemplu";
import Backtracking from "../components/Backtracking";
import PermutariC from "../components/PermutariC";
import ModificariNecesare from "../components/ModificariNecesare";
import ModificareExpl from "../components/ModificareExpl";
import FuncValidare from "../components/FuncValidare";
import Suplimentar from "../components/Suplimentar";
import Dezvaluire from "../components/Dezvaluire";

import { Helmet } from "react-helmet";

const ExplicationPage = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6 bg-[url('/images/background2.png')] bg-cover bg-center bg-fixed bg-no-repeat">
      <Helmet>
        <title>Explicație Algoritm</title>
        <meta
          name="description"
          content="Pagina explică algoritmul utilizat pentru permutări în cadrul festivalului de muzică."
        />
        <meta
          name="keywords"
          content="festival muzică, algoritm, permutări, explicații, backtracking"
        />
        <meta name="author" content="Adriana" />
      </Helmet>

      <Introducere />
      <Exemplu />
      <Backtracking />
      <PermutariC />
      <ModificariNecesare />
      <ModificareExpl />
      <FuncValidare />
      <Suplimentar />
      <Dezvaluire />
    </div>
  );
};

export default ExplicationPage;
