import { useState, useEffect } from "react";
import { FaRedo } from "react-icons/fa";

const Step3 = ({ results, handleReset }) => {
  const [audio, setAudio] = useState(null); // Starea pentru audio activ

  const musicFiles = {
    jazz: "/audio/jazz.mp3",
    pop: "/audio/pop.mp3",
    rock: "/audio/rock.mp3",
    clasica: "/audio/clasica.mp3",
    folk: "/audio/folk.mp3",
    rap: "/audio/rap.mp3",
    disco: "/audio/disco.mp3",
  };

  const handleClick = (music) => {
    const musicSrc = musicFiles[music];

    if (audio && audio.src.endsWith(musicSrc)) {
      audio.pause();
      audio.currentTime = 0;
      setAudio(null);
      return;
    }

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    const newAudio = new Audio(musicSrc);
    newAudio.loop = true;
    newAudio
      .play()
      .catch((error) => console.error("Error playing audio:", error));
    setAudio(newAudio);
  };

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio]);

  return (
    <div className="box p-6 rounded-lg shadow-lg bg-gradient-to-r from-peach-100 via-blue-200 to-blue-500 w-full max-w-xl mx-auto animate-fade-in-right">
      <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-peach animate-pop">
        Ordine Generate
      </h1>
      {/* Container scrollabil */}
      <div className="space-y-4 overflow-y-auto max-h-96 p-2 border rounded-lg bg-gray-100 shadow-inner">
        {results.map((result, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-md shadow-md bg-gray-50 animate-fadeIn"
          >
            {result.map((item, i) => {
              const musicKey = item.toLowerCase();
              const isMusicAvailable = musicFiles[musicKey];

              return (
                <span
                  key={i}
                  onClick={() => {
                    if (isMusicAvailable) {
                      handleClick(musicKey);
                    }
                  }}
                  className={`px-2 py-1 rounded mr-2 inline-block ${
                    isMusicAvailable ? "cursor-pointer" : "cursor-default"
                  } ${
                    i === 1
                      ? "bg-blue-200 font-bold animate-wiggle"
                      : i === result.length - 2
                      ? "bg-yellow-200 font-bold animate-wiggle"
                      : ""
                  }`}
                >
                  {item}
                </span>
              );
            })}
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
  );
};

export default Step3;
