export default function App() {
  const myItems = calcularTotalItens(itens);
  return (
    <div>
      <div className="enunciado">
        <h1>Exercício 8 - Calcular Total de Itens</h1>
        <p>
          Crie uma função chamada calcularTotalItens que receba um array de
          objetos representando itens de um carrinho de compras, onde cada
          objeto tem uma propriedade quantidade e precoUnitario. A função deve
          retornar o valor total dos itens no carrinho.
        </p>
        <pre>{JSON.stringify(itens, null, 2)}</pre>
      </div>

      <div className="solucao">
        <h2>Valor total dos itens no carrinho:</h2>
        <pre>R$ {JSON.stringify(myItems, null, 2)},00.</pre>
      </div>
    </div>
  );
}

const itens = [
  { nome: "Laptop", quantidade: 1, precoUnitario: 1000 },
  { nome: "Tablet", quantidade: 2, precoUnitario: 400 },
  { nome: "Smartphone", quantidade: 1, precoUnitario: 1500 },
];

function calcularTotalItens(itemsArray) {
  const totalItens = itemsArray.reduce((total, item) => {
    return total + item.precoUnitario * item.quantidade;
  }, 0);
  return totalItens;
}
