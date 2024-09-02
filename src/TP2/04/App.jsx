const produtos = [
  { id: 1, nome: "Produto A", preco: 20 },
  { id: 2, nome: "Produto B", preco: 10 },
  { id: 3, nome: "Produto C", preco: 40 },
  { id: 4, nome: "Produto D", preco: 70 },
  { id: 5, nome: "Produto E", preco: 50 },
  { id: 6, nome: "Produto F", preco: 78 },
];

function FiltrarAcimaPreco(produtos, rpreco) {
  const produtosAcimaDe20 = produtos.filter(
    (produtos) => produtos.preco > rpreco
  );

  return (
    <div>
      <div className="enunciado">
        <h1>Exercício 4 - Filtrar Produtos Acima de um Preço</h1>
        <p>
          Crie uma função chamada filtrarAcimaPreco que receba um array de
          objetos representando produtos, onde cada produto tem uma propriedade
          preco. A função deve retornar um novo array contendo apenas os
          produtos com preço maior que um valor especificado.
        </p>
        <pre>const produtos = {JSON.stringify(produtos, null, 2)}</pre>
      </div>
      <div className="solucao">
        <h2>Filtro:</h2>
        <p>Os produtos acima de {rpreco} são:</p>
        <ul>
          {produtosAcimaDe20.map((produto) => (
            <li key={produto.id}>
              {produto.nome} - R$ {produto.preco}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  return FiltrarAcimaPreco(produtos, 20);
}
