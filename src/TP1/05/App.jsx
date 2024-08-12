export default function App() {
  const produtoEncontrado = encontrarProdutoPorNome(produtos, "Smartphone");

  return (
    <div>
      <div className="enunciado">
        <h1>Encontrar um Produto por Nome</h1>
        <p>
          Desenvolva uma função chamada encontrarProdutoPorNome que receba um
          array de objetos representando produtos, onde cada produto tem uma
          propriedade nome. A função deve retornar o primeiro produto que tenha
          o nome especificado.
        </p>
        <pre>const produtos = {JSON.stringify(produtos, null, 2)}</pre>
      </div>

      <div className="solucao">
        <h2>Procurando por {produtoEncontrado.nome}:</h2>
        <p>
          O nome do PRIMEIRO produto com o nome especificado foi o(a)
          {produtoEncontrado.nome} que custa R$ {produtoEncontrado.preco}.
        </p>
      </div>
    </div>
  );
}

const produtos = [
  { nome: "Laptop", preco: 1000 },
  { nome: "Tablet", preco: 400 },
  { nome: "Smartphone", preco: 1200 },
  { nome: "Smartphone", preco: 1500 },
];

export function encontrarProdutoPorNome(produtos, nome) {
  return produtos.find((produto) => produto.nome === `${nome}`);
}
