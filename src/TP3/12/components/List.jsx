export default function List({ numberList }) {
  return (
    <div>
      <h1>Lista</h1>
      <p>
        Instrução: atualize a página para ver uma lista de números de 0 a 5 ou
        uma mensagem reportando a lista vazia.
      </p>

      {numberList.length === 0 ? (
        <h3>A lista está vazia</h3>
      ) : (
        numberList.map((num, index) => <li key={index}>{num}</li>)
      )}
    </div>
  );
}
