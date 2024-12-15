const Step1 = ({ count, setCount, handleGenerateInputs }) => {
  return (
    <div className="box p-6 rounded-lg shadow-lg bg-gradient-to-r from-peach-100 via-blue-200 to-blue-500 w-full max-w-xl mx-auto animate-fade-in-right">
      <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-peach animate-pop">
        Introdu Numărul
      </h1>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          className="input input-bordered w-full text-center font-bold bg-gradient-to-r from-white via-peach-200 to-white focus:outline-none focus:ring-2 focus:ring-peach-300 transition-all ease-in-out duration-300 transform hover:scale-105 hover:shadow-lg"
          placeholder="Introdu un număr (5-9)"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          required
        />
        <button
          className="btn btn-primary text-white transform hover:scale-105 hover:shadow-lg transition-all ease-in-out"
          onClick={handleGenerateInputs}
        >
          Generează inputuri
        </button>
      </div>
    </div>
  );
};

export default Step1;
