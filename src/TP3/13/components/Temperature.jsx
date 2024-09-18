export default function Temperature({showTemperature}) {
  return (
    <div>
      <h1>Temperatura</h1>
      <p>Instrução: atualize a página para ver uma temperatura diferente.</p>
      <h2>{showTemperature}ºC</h2>
      <h3>{showTemperature > 25 ? "Está quente!" : "Está frio!"}</h3>
    </div>
  );
}
