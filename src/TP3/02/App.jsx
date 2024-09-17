import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="enunciado">
        <h1>Tarefa 2 - Ajustando o Estado Inicial</h1>
        <p>
          Crie um componente de classe chamado Counter que exiba um contador
          iniciando em 0. Adicione um botão que, quando clicado, incrementa o
          contador em 1. Instruções: Implemente o componente Counter utilizando
          o estado para controlar o valor do contador. Certifique-se de que o
          valor do contador seja exibido e atualizado conforme o botão é
          clicado.
        </p>
      </div>

      <div className="solucao">
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Adiciona</button>
      </div>
    </div>
  );
}
