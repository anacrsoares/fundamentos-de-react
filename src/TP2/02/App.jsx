export default function FiltrarDisponiveis() {
  const produtos = [
    { id: 1, nome: "Produto A", disponivel: true },
    { id: 2, nome: "Produto B", disponivel: true },
    { id: 3, nome: "Produto C", disponivel: false },
    { id: 4, nome: "Produto D", disponivel: false },
    { id: 5, nome: "Produto E", disponivel: true },
  ];

  const produtosDisponiveis = produtos.filter(
    (produto) => produto.disponivel === true
  );

  return (
    <div>
      <div className="enunciado">
        <h1>Exercício 2 - Filtrar Produtos Disponíveis</h1>

        <p>
          Desenvolva uma função chamada filtrarDisponiveis que receba um array
          de objetos representando produtos, onde cada produto tem uma
          propriedade disponivel que é um booleano. A função deve retornar um
          novo array contendo apenas os produtos que estão disponíveis.
        </p>
      </div>

      <div className="solucao">
        <h2>Produtos Disponíveis:</h2>
        <br />
        <ul>
          {produtosDisponiveis.map((produto) => (
            <li key={produto.id}>{produto.nome}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
