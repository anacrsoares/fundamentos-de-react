import Card from "./Card.jsx";

export default function Cards() {
  return (
    <div>
      <div className="enunciado">
        <h1>Exercício 5 - Componentização básica</h1>
        <p>
          Neste exercício, você deverá criar um componente isolado chamado
          Card.jsx contendo um título e um texto e fazer a chamada desse
          componente 4 vezes no componente principal.
        </p>
      </div>

      <div className="solucao">
        <h2>Cards</h2>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
