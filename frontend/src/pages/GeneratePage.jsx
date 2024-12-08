import { useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";

import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";

const GeneratePage = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState("");
  const [codes, setCodes] = useState([]);
  const [firstCode, setFirstCode] = useState("");
  const [secondCode, setSecondCode] = useState("");
  const [results, setResults] = useState([]);

  const notifyError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
    });
  };

  const notifySuccess = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
    });
  };

  const handleGenerateInputs = () => {
    if (count < 5 || count > 9) {
      notifyError("Numărul trebuie să fie între 5 și 9.");
      return;
    }
    setCodes(Array.from({ length: Number(count) }, () => ""));
    setStep(2);
  };

  const handleContinue = () => {
    if (codes.some((code) => code.trim() === "")) {
      notifyError("Toate codurile trebuie completate!");
      return;
    }
    if (!codes.includes(firstCode)) {
      notifyError("Primul cod nu este în lista de coduri!");
      return;
    }
    if (!codes.includes(secondCode)) {
      notifyError("Al doilea cod nu este în lista de coduri!");
      return;
    }
    notifySuccess("Permutările au fost generate cu succes!");
    generateOrders();
    setStep(3);
  };

  const generateOrders = () => {
    const n = codes.length;
    const results = [];
    const temp = Array(n).fill("");
    const used = Array(n).fill(false);

    const isValid = (k, value) => {
      if (k === 1 && value !== firstCode) return false;
      if (k === n - 2 && value !== secondCode) return false;
      if (temp.slice(0, k).includes(value)) return false;
      return true;
    };

    const backtrack = (k) => {
      if (k === n) {
        results.push([...temp]);
        return;
      }
      for (let i = 0; i < n; i++) {
        if (!used[i] && isValid(k, codes[i])) {
          temp[k] = codes[i];
          used[i] = true;
          backtrack(k + 1);
          used[i] = false;
        }
      }
    };

    backtrack(0);
    setResults(results);
  };

  const handleReset = () => {
    setStep(1);
    setCount("");
    setCodes([]);
    setFirstCode("");
    setSecondCode("");
    setResults([]);
  };

  return (
    <div className="relative min-h-screen bg-black">
      <Helmet>
        <title>Generare Permutări</title>
        <meta
          name="description"
          content="Pagina de generare a permutărilor pentru codurile muzicale, utilizând un algoritm avansat de backtracking. Explorați și generați combinațiile ideale!"
        />
        <meta
          name="keywords"
          content="permutări, backtracking, algoritmi, festival muzică, React"
        />
      </Helmet>

      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {step === 1 && (
          <Step1
            count={count}
            setCount={setCount}
            handleGenerateInputs={handleGenerateInputs}
          />
        )}

        {step === 2 && (
          <Step2
            codes={codes}
            setCodes={setCodes}
            firstCode={firstCode}
            secondCode={secondCode}
            setFirstCode={setFirstCode}
            setSecondCode={setSecondCode}
            handleContinue={handleContinue}
          />
        )}

        {step === 3 && <Step3 results={results} handleReset={handleReset} />}
      </div>
    </div>
  );
};

export default GeneratePage;
