import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const reset = () => setCounter(0);

  return (
    <div className="solucao">
      <h1>{counter}</h1>

      <div className="buttons">
        <button onClick={() => setCounter(counter + 1)}>Adiciona</button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
