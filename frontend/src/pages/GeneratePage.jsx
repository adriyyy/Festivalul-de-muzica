import { useState } from "react";
import { FaPlay, FaRedo } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GeneratePage = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState("");
  const [codes, setCodes] = useState([]);
  const [firstCode, setFirstCode] = useState("");
  const [secondCode, setSecondCode] = useState("");
  const [results, setResults] = useState([]);

  const musicFiles = {
    jazz: "/audio/jazz.mp3",
    pop: "/audio/pop.mp3",
    rock: "/audio/rock.mp3",
    clasica: "/audio/clasica.mp3",
    folk: "/audio/folk.mp3",
    rap: "/audio/rap.mp3",
    disco: "/audio/disco.mp3",
  };

  const [audio, setAudio] = useState(null);

  const handleClick = (music) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    const newAudio = new Audio(musicFiles[music]);

    newAudio
      .play()
      .catch((error) => console.error("Error playing audio: ", error));

    setAudio(newAudio);
  };

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
    if (count < 5 || count > 12) {
      notifyError("Numărul trebuie să fie între 5 și 12.");
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
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/public/videos/background.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Toast Container */}
        <ToastContainer />

        {/* Step 1: Input number of songs */}
        {step === 1 && (
          <div className="box p-6 rounded-lg shadow-lg bg-gradient-to-r from-peach-100 via-blue-200 to-blue-500 w-full max-w-xl mx-auto animate-fade-in-right">
            <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-peach animate-pop">
              Introdu Numărul
            </h1>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                className="input input-bordered w-full text-center font-bold bg-gradient-to-r from-white via-peach-200 to-white focus:outline-none focus:ring-2 focus:ring-peach-300 transition-all ease-in-out duration-300 transform hover:scale-105 hover:shadow-lg"
                placeholder="Enter a number (5-12)"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                required
              />
              <button
                className="btn btn-primary text-white transform hover:scale-105 hover:shadow-lg transition-all ease-in-out"
                onClick={handleGenerateInputs}
              >
                <FaPlay className="mr-2" /> Genereaza inputuri
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Input codes */}
        {step === 2 && (
          <div className="box p-6 rounded-lg shadow-lg bg-gradient-to-r from-peach-100 via-blue-200 to-blue-500 w-full max-w-xl mx-auto animate-fade-in-right">
            <h2 className="text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-peach animate-pop">
              Introdu Codurile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {codes.map((code, index) => (
                <input
                  key={index}
                  type="text"
                  className="input input-bordered w-full text-center font-bold bg-gradient-to-r from-white via-peach-200 to-white focus:outline-none focus:ring-2 focus:ring-peach-300 transition-all ease-in-out duration-300 transform hover:scale-105 hover:shadow-lg"
                  placeholder={`Cod ${index + 1}`}
                  value={codes[index]}
                  onChange={(e) =>
                    setCodes((prev) => {
                      const newCodes = [...prev];
                      newCodes[index] = e.target.value;
                      return newCodes;
                    })
                  }
                  required
                />
              ))}
            </div>
            <div className="mt-4">
              <input
                type="text"
                className="input input-bordered w-full mb-2 text-center font-bold bg-gradient-to-r from-white via-peach-200 to-white focus:outline-none focus:ring-2 focus:ring-peach-300 transition-all ease-in-out duration-300 transform hover:scale-105 hover:shadow-lg"
                placeholder="Introdu primul cod"
                value={firstCode}
                onChange={(e) => setFirstCode(e.target.value)}
                required
              />
              <input
                type="text"
                className="input input-bordered w-full mb-2 text-center font-bold bg-gradient-to-r from-white via-peach-200 to-white focus:outline-none focus:ring-2 focus:ring-peach-300 transition-all ease-in-out duration-300 transform hover:scale-105 hover:shadow-lg"
                placeholder="Introdu al doilea cod"
                value={secondCode}
                onChange={(e) => setSecondCode(e.target.value)}
                required
              />
            </div>
            <button
              className="btn btn-secondary text-white w-full mt-4 transform hover:scale-105 hover:shadow-lg transition-all ease-in-out"
              onClick={handleContinue}
            >
              <FaPlay className="mr-2" /> Continuă
            </button>
          </div>
        )}

        {/* Step 3: Display generated orders */}
        {step === 3 && (
          <div className="box p-6 rounded-lg shadow-lg bg-gradient-to-r from-peach-100 via-blue-200 to-blue-500 w-full max-w-xl mx-auto animate-fade-in-right">
            <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-peach animate-pop">
              Ordine Generate
            </h1>
            <div className="space-y-4">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-300 rounded-md shadow-md bg-gray-50 animate-fadeIn"
                >
                  {result.map((item, i) => (
                    <span
                      key={i}
                      onClick={() => {
                        const it = item.toLowerCase();
                        musicFiles[it] && handleClick(it);
                      }}
                      className={`px-2 py-1 rounded mr-2 inline-block cursor-pointer ${
                        i === 1
                          ? "bg-blue-200 font-bold animate-wiggle"
                          : i === result.length - 2
                          ? "bg-yellow-200 font-bold animate-wiggle"
                          : ""
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <button
              className="btn btn-accent text-lg text-white w-full mt-4 transform hover:scale-105 hover:shadow-lg transition-all ease-in-out"
              onClick={handleReset}
            >
              <FaRedo className="mr-2" /> Resetează
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratePage;
