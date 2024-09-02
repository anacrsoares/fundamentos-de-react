export default function App() {
  const objProdutos = agruparPorCategoria(produtos);
  return (
    <div>
      <div className="enunciado">
        <h1>Exercício 9 - Agrupar Produtos por Categoria</h1>
        <p>
          Desenvolva uma função chamada agruparPorCategoria que receba um array
          de objetos representando produtos, onde cada produto tem uma
          propriedade categoria e uma propriedade nome. A função deve retornar
          um objeto onde as chaves são as categorias e os valores são arrays
          contendo os nomes dos produtos pertencentes a cada categoria.
        </p>

        <pre>{JSON.stringify(produtos, null, 2)}</pre>
      </div>

      <div className="solucao">
        <pre>{JSON.stringify(objProdutos, null, 2)}</pre>
      </div>
    </div>
  );
}

const produtos = [
  { nome: "Laptop", categoria: "Eletrônicos" },
  { nome: "Camisa", categoria: "Roupas" },
  { nome: "Smartphone", categoria: "Eletrônicos" },
  { nome: "Calça", categoria: "Roupas" },
  { nome: "Fone de Ouvido", categoria: "Eletrônicos" },
];

function agruparPorCategoria(produtosArray) {
  const objProdutos = produtosArray.reduce((agg, produto) => {
    const { nome, categoria } = produto;

    if (!agg[categoria]) {
      agg[categoria] = [];
    }

    agg[categoria].push(nome);

    return agg;
  }, {});
  return objProdutos;
}
