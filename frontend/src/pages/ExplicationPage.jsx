import Introducere from "../components/Introducere";
import Exemplu from "../components/Exemplu";
import Backtracking from "../components/Backtracking";
import PermutariC from "../components/PermutariC";
import ModificariNecesare from "../components/ModificariNecesare";
import ModificareExpl from "../components/ModificareExpl";
import FuncValidare from "../components/FuncValidare";
import Suplimentar from "../components/Suplimentar";
import Dezvaluire from "../components/Dezvaluire";

const ExplicationPage = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6">
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
