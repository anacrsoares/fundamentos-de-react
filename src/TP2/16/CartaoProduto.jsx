import "./CartaoProduto.css";

export default function CartaoProduto({ imagem, nome, descricao, preco }) {
  return (
    <div className="cartao-produto">
      <img src={imagem} alt={nome} className="imagem-produto" />
      <div className="informacoes-produto">
        <h3 className="nome-produto">{nome}</h3>
        <p className="descricao-produto">{descricao}</p>
        <p className="preco-produto">{preco}</p>
      </div>
    </div>
  );
}
