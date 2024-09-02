export default function App() {
  const prodEstoque = filtrarPorCategoria(produtos);
  return (
    <div>
      <div className="enunciado">
        <h1>Exercício 7 - Verificar Disponibilidade de Estoque</h1>
        <p>
          Desenvolva uma função chamada verificarEstoque que receba um array de
          objetos representando produtos, onde cada produto tem uma propriedade
          quantidadeEmEstoque. A função deve retornar um array contendo apenas
          os produtos que têm quantidade em estoque maior que zero.
        </p>
        <pre>{JSON.stringify(produtos, null, 2)}</pre>
      </div>

      <div className="solucao">
        <p>Os produtos cuja quantidade em estoque é maior que 0 são:</p>
        <pre>{JSON.stringify(prodEstoque, null, 2)}</pre>
      </div>
    </div>
  );
}

const produtos = [
  { nome: "Laptop", quantidadeEmEstoque: 5 },
  { nome: "Tablet", quantidadeEmEstoque: 0 },
  { nome: "Smartphone", quantidadeEmEstoque: 3 },
];

function filtrarPorCategoria(produtos) {
  return produtos.filter((produto) => produto.quantidadeEmEstoque > 0);
}
