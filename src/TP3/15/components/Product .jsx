export default function Product({
  name,
  price,
  description = "Não disponível",
}) {
  return (
    <div className="product-card">
      <h2>Produto: {name}</h2>
      <p>Preço: R$ {price}</p>
      <p>Descrição: {description}.</p>
    </div>
  );
}
