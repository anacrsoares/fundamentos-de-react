export default function App() {
  const categoria = "Eletrônicos"; // Especificar
  const prodCategoria = filtrarPorCategoria(produtos, categoria);

  return (
    <div>
      <div className="enunciado">
        <h1>Exerício 6 - Filtrar Produtos por Categoria</h1>
        <p>
          Desenvolva uma função chamada filtrarPorCategoria que receba um array
          de objetos representando produtos, onde cada produto tem uma
          propriedade categoria. A função deve retornar um novo array contendo
          apenas os produtos que pertencem a uma categoria especificada.
        </p>

        <pre>{JSON.stringify(produtos, null, 2)}</pre>
      </div>

      <div className="solucao">
        <h2>Array retornado para categoria "{categoria}":</h2>
        <p>Os produtos da categoria {categoria} foram : </p>
        <pre>{JSON.stringify(prodCategoria, null, 2)}</pre>
      </div>
    </div>
  );
}

const produtos = [
  { nome: "Laptop", categoria: "Eletrônicos" },
  { nome: "Camisa", categoria: "Roupas" },
  { nome: "Smartphone", categoria: "Eletrônicos" },
  { nome: "Sandália", categoria: "Calçados" },
  { nome: "Geladeira", categoria: "Eletrodomésticos" },
];

function filtrarPorCategoria(produtos, categoria) {
  return produtos.filter((produto) => produto.categoria === categoria);
}
