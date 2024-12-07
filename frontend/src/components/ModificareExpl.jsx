const ModificareExpl = () => {
  return (
    <div className="mt-10 p-6 bg-base-100 rounded-lg shadow-lg border border-base-300 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-primary mb-4 transition-transform transform hover:scale-105 hover:text-accent">
        Cum o modificăm?
      </h3>

      <p className="text-lg text-secondary-content mb-4 transition-all duration-300 transform hover:translate-x-1">
        Răspunsul este simplu. Citim încă o dată condiția:
        <span className="text-accent bg-neutral p-1 rounded-lg font-mono hover:bg-accent hover:text-neutral transition-all duration-200">
          &quot;melodiile cu codurile c1 respectiv c2 (citit de la tastatură)
          trebuie obținute să evolueze a doua, respectiv prima&quot;
        </span>
        .
      </p>

      <div className="flex items-center space-x-3">
        <p className="mt-4 text-lg text-secondary-content transition-all duration-300 transform hover:translate-x-1">
          Ce încearcă enunțul să ne transmită este faptul că numărul codului de
          pe poziția 2 trebuie să fie <strong>NEAPĂRAT</strong> egal cu ce ne
          transmite utilizatorul prin intermediul variabilei c1.
        </p>
      </div>

      <p className="mt-4 text-lg text-secondary-content transition-all duration-300 transform hover:translate-x-1">
        Analog și pentru c2. c2 trebuie să se regăsească pe penultima poziție și
        anume pe poziția n-1.
      </p>
    </div>
  );
};

export default ModificareExpl;
