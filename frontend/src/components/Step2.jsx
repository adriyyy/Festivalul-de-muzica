import { FaPlay } from "react-icons/fa";
import { useRef } from "react";

const Step2 = ({
  codes,
  setCodes,
  firstCode,
  secondCode,
  setFirstCode,
  setSecondCode,
  handleContinue,
}) => {
  const inputRefs = useRef([]); // Refs pentru toate input-urile

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      // Dacă nu este ultimul input, mută focus-ul
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      } else {
        // Dacă este ultimul input, apasă butonul
        handleContinue();
      }
    }
  };

  return (
    <div className="box p-6 rounded-lg shadow-lg bg-gradient-to-r from-peach-100 via-blue-200 to-blue-500 w-full max-w-xl mx-auto animate-fade-in-right">
      <h2 className="text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-peach animate-pop">
        Introdu Codurile
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {codes.map((code, index) => (
          <input
            key={index}
            type="text"
            ref={(el) => (inputRefs.current[index] = el)}
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
            onKeyDown={(e) => handleKeyDown(e, index)}
            required
          />
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          ref={(el) => (inputRefs.current[codes.length] = el)}
          className="input input-bordered w-full mb-2 text-center font-bold bg-gradient-to-r from-white via-peach-200 to-white focus:outline-none focus:ring-2 focus:ring-peach-300 transition-all ease-in-out duration-300 transform hover:scale-105 hover:shadow-lg"
          placeholder="Introdu primul cod"
          value={firstCode}
          onChange={(e) => setFirstCode(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, codes.length)}
          required
        />
        <input
          type="text"
          ref={(el) => (inputRefs.current[codes.length + 1] = el)}
          className="input input-bordered w-full mb-2 text-center font-bold bg-gradient-to-r from-white via-peach-200 to-white focus:outline-none focus:ring-2 focus:ring-peach-300 transition-all ease-in-out duration-300 transform hover:scale-105 hover:shadow-lg"
          placeholder="Introdu al doilea cod"
          value={secondCode}
          onChange={(e) => setSecondCode(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, codes.length + 1)}
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
  );
};

export default Step2;
