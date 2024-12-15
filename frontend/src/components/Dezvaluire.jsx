import SyntaxHighlighter from "react-syntax-highlighter";
import { FaCopy } from "react-icons/fa";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";

const Dezvaluire = () => {
  const [showSolution, setShowSolution] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`#include <iostream>
#include <cstring>

using namespace std;

char muz[20][100], st[20][100], c1[100], c2[100], aux[100];
int n;

void afisare(int k){
    for(int i = 1; i <= k; i++) cout << st[i] << " ";
    cout << endl;
}

int validare(int k){
    for(int i = 1; i < k; i++){
        if(strcmp(st[i], st[k]) == 0) return 0;
    }
    if((k == 2 && strcmp(st[k], c1) != 0) ||
       (k == n - 1 && strcmp(st[k], c2) != 0)) return 0;
    return 1;
}

void back(int k){
    if(k == n + 1) afisare(k); 
    else for(int i = 1; i <= n; i++){
        strcpy(st[k], muz[i]);
        if(validare(k)) back(k + 1); 
    }
}

int cautare_muz(char c[100]){
    for(int i = 1; i <= n; i++){
        if(strcmp(muz[i], aux) == 0){
            strcpy(c, aux);
            return 1;
        }
    }
    return 0;
}

int main(){

    cout << "Introdu un numar n(intre 5 si 12): "; cin >> n;
    while(n < 5 || n > 12){
        cout << "Numarul introdus nu respecta cerintele. Incearca din nou: ";
        cin >> n;
    }

    cout << "Introdu codurile muzicale: " << endl;
    for (int i = 1; i <= n; i++){
        cout << "Codul nr" << i << ": ";
        cin >> muz[i];
    }

    cout << "Introdu primul cod pe care doresti sa il plasezi pe pozitia 2: "; 
    cin >> aux;
    while(!cautare_muz(c1)){
        cout << "Codul introdus nu se regaseste in sir. Introdu un cod valid: ";
        cin >> aux;
    }

    cout << "Introdu al doilea cod pe care doresti sa il plasezi pe penultima pozitie: "; 
    cin >> aux;
    while(!cautare_muz(c2)){
        cout << "Codul introdus nu se regaseste in sir. Introdu un cod valid: ";
        cin >> aux;
    }
    
    back(1);
    return 0;
}`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="mt-10 p-6 bg-base-100 rounded-lg shadow-lg border border-base-300">
      <button
        className="btn bg-emerald-600 hover:bg-emerald-800 w-full text-lg font-bold"
        onClick={() => setShowSolution(!showSolution)}
      >
        {showSolution
          ? "Ascunde rezolvarea"
          : "Click pentru a dezvălui rezolvarea"}
      </button>
      {showSolution && (
        <div className="relative mt-5">
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
#include <cstring>

using namespace std;

char muz[20][100], st[20][100], c1[100], c2[100], aux[100];
int n;

void afisare(int k){
    for(int i = 1; i <= k; i++) cout << st[i] << " ";
    cout << endl;
}

int validare(int k){
    for(int i = 1; i < k; i++){
        if(strcmp(st[i], st[k]) == 0) return 0;
    }
    if((k == 2 && strcmp(st[k], c1) != 0) ||
       (k == n - 1 && strcmp(st[k], c2) != 0)) return 0;
    return 1;
}

void back(int k){
    if(k == n + 1) afisare(k); 
    else for(int i = 1; i <= n; i++){
        strcpy(st[k], muz[i]);
        if(validare(k)) back(k + 1); 
    }
}

int cautare_muz(char c[100]){
    for(int i = 1; i <= n; i++){
        if(strcmp(muz[i], aux) == 0){
            strcpy(c, aux);
            return 1;
        }
    }
    return 0;
}

int main(){
    cout << "Introdu un numar n(intre 5 si 12): "; cin >> n;
    while(n < 5 || n > 12){
        cout << "Numarul introdus nu respecta cerintele. Incearca din nou: ";
        cin >> n;
    }

    cout << "Introdu codurile muzicale: " << endl;
    for (int i = 1; i <= n; i++){
        cout << "Codul nr" << i << ": ";
        cin >> muz[i];
    }

    cout << "Introdu primul cod pe care doresti sa il plasezi pe pozitia 2: "; 
    cin >> aux;
    while(!cautare_muz(c1)){
        cout << "Codul introdus nu se regaseste in sir. Introdu un cod valid: ";
        cin >> aux;
    }

    cout << "Introdu al doilea cod pe care doresti sa il plasezi pe penultima pozitie: "; 
    cin >> aux;
    while(!cautare_muz(c2)){
        cout << "Codul introdus nu se regaseste in sir. Introdu un cod valid: ";
        cin >> aux;
    }
    
    back(1);
    return 0;
}`}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

export default Dezvaluire;
