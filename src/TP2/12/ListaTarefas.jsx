export default function ListaTarefas() {
  const tarefas = [
    "Comprar café",
    "Estudar React",
    "Fazer exercícios",
    "Café da manhã",
    "Beber 2L de água",
  ];

  return (
    <div>
      <div className="enunciado">
        <h1>Exercício 12 - Criar uma Lista de Tarefas com Vite</h1>
        <p>
          Crie um novo projeto React utilizando Vite. Dentro do projeto, crie um
          componente funcional chamado ListaTarefas que contenha um array
          estático de tarefas e exiba cada tarefa em um elemento dentro de uma
          lista ordenada. Use o método map para iterar sobre o array e
          renderizar cada tarefa. Utilize o seguinte array de tarefas:
        </p>

        <p>
          Inclua este array diretamente no componente ListaTarefas e renderize a
          lista de tarefas na tela. Após criar o componente, importe-o e
          utilize-o no arquivo src/App.jsx . Verifique se a lista de tarefas é
          exibida corretamente.
        </p>

        <pre>{JSON.stringify(tarefas, null, 2)}</pre>
      </div>

      <div className="solucao">
        <ol>
          {tarefas.map((tarefa) => (
            <li>{tarefa}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
