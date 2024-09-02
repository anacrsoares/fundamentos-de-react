export default function CalcularPrecoTotal() {
  const preçoUnitário = 10; // defina o preço unitário
  const quantidadeComprada = 3; // defina a quantidade

  const preçoTotal = preçoUnitário * quantidadeComprada;

  return (
    <div>
      <div className="enunciado">
        <h1>Exercício 1 - Cálculo do Preço Total</h1>
        <p>
          Crie uma função chamada calcularPrecoTotal que receba dois números
          como parâmetros: o preço de um produto e a quantidade comprada. A
          função deve retornar o preço total do produto com base na quantidade.
        </p>
      </div>
      <p>O preço unitário é: R$ {preçoUnitário},00</p>
      <p>A quantidade comprada é R$ {quantidadeComprada},00</p>
      <p>O preço total é: R$ {preçoTotal},00</p>
    </div>
  );
}
