export default function CalcularMediaAvaliacoes() {
  const avaliacoes = [1, 5, 7, 8, 10, 2, 3, 4, 5, 5, 6, 7, 9, 9, 4, 4, 2, 1];

  const soma = avaliacoes.reduce((total, avaliacoes) => total + avaliacoes, 0);

  const media = Math.round((soma / avaliacoes.length) * 100) / 100;

  return (
    <div>
      <div className="enunciado">
        <h1>Exercício 3 - Calcular Média de Avaliações</h1>
        <p>
          Desenvolva uma função chamada calcularMediaAvaliacoes que receba um
          array de números representando avaliações de um produto e retorne a
          média das avaliações. Utilize os métodos reduce e length para calcular
          a média.
        </p>
      </div>
      <div className="solucao">
        <h2>Média:</h2>
        <p>A média das avaliações foi {media}.</p>
      </div>
    </div>
  );
}
