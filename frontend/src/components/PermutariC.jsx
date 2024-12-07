import { FaCopy } from "react-icons/fa"; // Icon pentru copiere
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const PermutariC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`
#include <iostream>

using namespace std;

// Declarația variabilelor globale
int n, st[100]; // 'n' este numărul de elemente, 'st' este vectorul pentru soluție

void afisare(int k){
    for(int i = 1; i < k; i++) cout << st[i] << " "; 
    cout << endl;
}

// aceasta functie va fi folosita la validare in functia back
int validare(int k){
    for(int i = 1; i < k; i++){
        // Compară elementul de pe pozitia curenta(k) cu toate elementele precedente
        if(st[i] == st[k]) return 0; // Dacă un element s-a repetat, soluția nu este validă 
    }
    return 1; // in caz contrar returneaza adevarat
}

void back(int k){
    if(k == n + 1) 
        afisare(k); // Dacă s-a completat o soluție, o afișează
    else {
        for(int i = 1; i <= n; i++){
            // Încearcă fiecare valoare posibilă de la 'n'
            st[k] = i;
            if(validare(k)) 
                back(k + 1); // Daca solutia e valida apeleaza recursiv funcția pentru poziția următoare. In caz contrar se incrementeaza i
        }
    }
}

int main(){
    cout << "n=" ; cin >> n;
    back(1); // Pornește procesul de backtracking de la indexul 1
    return 0;
}
    `);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="mt-10 p-6 bg-base-100 rounded-lg shadow-lg border border-base-300">
      <h3 className="text-2xl font-bold text-primary mb-4 transition-transform transform hover:scale-105 hover:text-accent">
        Algoritmul C++ pentru permutări:
      </h3>

      <div className="relative">
        <div className="absolute top-2 left-2 flex gap-2">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
        </div>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 text-white rounded-full transition-all hover:bg-gray-300"
          title="Copy to clipboard"
        >
          {isCopied ? (
            <span className="text-green-500 font-bold">Copiat!</span>
          ) : (
            <FaCopy size={20} />
          )}
        </button>

        <SyntaxHighlighter
          className="overflow-auto text-sm p-4 rounded-lg"
          language="cpp"
          style={a11yDark}
        >
          {`
#include <iostream>

using namespace std;

// Declarația variabilelor globale
int n, st[100]; // 'n' este numărul de elemente, 'st' este vectorul pentru soluție

void afisare(int k){
    for(int i = 1; i < k; i++) cout << st[i] << " "; 
    cout << endl;
}

// aceasta functie va fi folosita la validare in functia back
int validare(int k){
    for(int i = 1; i < k; i++){
        // Compară elementul de pe pozitia curenta(k) cu toate elementele precedente
        if(st[i] == st[k]) return 0; // Dacă un element s-a repetat, soluția nu este validă 
    }
    return 1; // in caz contrar returneaza adevarat
}

void back(int k){
    if(k == n + 1) 
        afisare(k); // Dacă s-a completat o soluție, o afișează
    else {
        for(int i = 1; i <= n; i++){
            // Încearcă fiecare valoare posibilă de la 'n'
            st[k] = i;
            if(validare(k)) 
                back(k + 1); // Daca solutia e valida apeleaza recursiv funcția pentru poziția următoare. In caz contrar se incrementeaza i
        }
    }
}

int main(){
    cout << "n=" ; cin >> n;
    back(1); // Pornește procesul de backtracking de la indexul 1
    return 0;
}
          `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default PermutariC;
