import { useState } from "react";
import DisplayCount from "./DisplayCount";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Adiciona</button>
    </div>
  );
}
