import { FaCopy } from "react-icons/fa"; // Icon pentru copiere
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const FuncValidare = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`
int validare(int k) {
for (int i = 1; i < k; i++) {
    if (st[i] == st[k]) return 0; // Verificăm dacă elementul se repetă
}
// Verificăm condițiile pentru c1 și c2
if ((k == 2 && st[k] != c1) || 
    (k == n - 1 && st[k] != c2)) return 0;
return 1; // Validare reușită
}
    `);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="mt-10 p-8 bg-base-100 rounded-lg shadow-xl border border-base-300">
      <h3
        className="text-3xl font-bold text-primary mb-6 transition-transform transform hover:scale-105 hover:text-accent"
        style={{ fontFamily: "'Press Start 2P', sans-serif" }}
      >
        Funcția de validare:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="text-lg text-secondary-content leading-relaxed">
          <p className="mb-4">
            În această funcție, se verifică două condiții logice importante:
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li className="transition-transform transform hover:translate-x-2 hover:text-accent">
              <span className="font-bold">1.</span>{" "}
              <code className="bg-neutral text-neutral-content hover:bg-accent hover:text-neutral px-2 py-1 rounded transition-all transform hover:scale-105 hover:shadow-lg">
                (k == 2 && st[k] != c1)
              </code>{" "}
              - Verificăm dacă poziția curentă a vectorului{" "}
              <span className="text-accent font-mono">k</span> este 2 și dacă
              elementul plasat pe acest index coincide cu prima cifră introdusă
              de la tastatură: <span className="text-accent font-bold">c1</span>
              .
            </li>
            <li className="transition-transform transform hover:translate-x-2 hover:text-accent">
              <span className="font-bold">2.</span>{" "}
              <code className="bg-neutral text-neutral-content hover:bg-accent hover:text-neutral px-2 py-1 rounded transition-all transform hover:scale-105 hover:shadow-lg">
                (k == n - 1 && st[k] != c2)
              </code>{" "}
              - Verificăm dacă poziția curentă a vectorului{" "}
              <span className="text-accent font-mono">k</span> este penultima și
              dacă elementul plasat pe acest index coincide cu a doua cifră
              introdusă de la tastatură:{" "}
              <span className="text-accent font-bold">c2</span>.
            </li>
          </ul>
          <p className="mt-6">
            Dacă una dintre aceste condiții este adevărată, se returnează{" "}
            <span className="text-accent font-bold">0</span>, ceea ce semnifică
            invalidarea încercării.
          </p>
        </div>

        <div className="relative transition-all transform hover:scale-105 hover:shadow-2xl ">
          <div className="absolute top-2 left-2 flex gap-2 z-10">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
          </div>

          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-2 text-white rounded-full transition-all hover:bg-gray-300 z-10"
            title="Copy to clipboard"
          >
            {isCopied ? (
              <span className="text-green-500 font-bold">Copiat!</span>
            ) : (
              <FaCopy size={20} />
            )}
          </button>

          <SyntaxHighlighter
            className="overflow-auto text-sm p-4 rounded-lg leading-relaxed relative"
            language="cpp"
            style={a11yDark}
          >
            {`
int validare(int k) {
for (int i = 1; i < k; i++) {
    if (st[i] == st[k]) return 0; // Verificăm dacă elementul se repetă
}
// Verificăm condițiile pentru c1 și c2
if ((k == 2 && st[k] != c1) || 
    (k == n - 1 && st[k] != c2)) return 0;
return 1; // Validare reușită
}
            `}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default FuncValidare;
