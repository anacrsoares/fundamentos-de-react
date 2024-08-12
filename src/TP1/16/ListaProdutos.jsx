import CartaoProduto from "./CartaoProduto.jsx";
import "./ListaProdutos.css";

export default function ListaProdutos() {
  const produtos = [
    {
      nome: "Tênis de Corrida",
      descricao: "Tênis confortável para corridas diárias.",
      preco: "R$ 299,90",
      imagem:
        "https://img.freepik.com/fotos-gratis/vista-de-cima-de-tenis-sobre-fundo-branco-vestuario-fisico-e-equipamentos-moda-esportiva-acessorios-esportivos-equipamento-esportivo-copia-de-conceito-saudavel-espaco-conceito-estilo-de-vida-saudavel-esporte-e-dieta_1391-735.jpg?t=st=1723399169~exp=1723402769~hmac=ca9647336b2644712f5a780dce2befa6fb5bb438e92faed68d0eca487dbc177d&w=1060",
    },
    {
      nome: "Camisa de Ciclismo",
      descricao: "Camisa respirável para ciclistas.",
      preco: "R$ 129,90",
      imagem:
        "https://img.freepik.com/fotos-premium/t-shirts-desportivos-vetoriais-t-shirts-de-corrida-t-shirt-de-corrida_947814-76532.jpg?w=360",
    },
    {
      nome: "Boné Esportivo",
      descricao: "Boné ajustável para proteção solar.",
      preco: "R$ 59,90",
      imagem:
        "https://img.freepik.com/fotos-gratis/tampa-branca-isolada_125540-1024.jpg?w=1060&t=st=1723399039~exp=1723399639~hmac=1b417b1a6c355d722ebccb5cb3fd8eeaef64ed47e14ac26404755616ef83948f",
    },
    {
      nome: "Boné Esportivo",
      descricao: "Boné ajustável para proteção solar.",
      preco: "R$ 59,90",
      imagem:
        "https://img.freepik.com/fotos-gratis/conjunto-de-dois-chapeus-de-caminhoneiro-com-malha-nas-costas_23-2149410050.jpg?w=996&t=st=1723398788~exp=1723399388~hmac=f29a508856bb3e9d188d0df8a050a72853f7da93845447469fc453275d95d8e8",
    },
    {
      nome: "Boné Esportivo",
      descricao: "Boné ajustável para proteção solar.",
      preco: "R$ 59,90",
      imagem:
        "https://img.freepik.com/fotos-gratis/conjunto-de-dois-chapeus-de-caminhoneiro-com-malha-nas-costas_23-2149410050.jpg?w=996&t=st=1723398788~exp=1723399388~hmac=f29a508856bb3e9d188d0df8a050a72853f7da93845447469fc453275d95d8e8",
    },
  ];
  return (
    <div>
      <div className="enunciado">
        <h1>
          Exercício 16 - Criar uma Lista de Produtos com Cartão de Produto
        </h1>
        <p>
          Crie um novo projeto React utilizando Vite. Dentro do projeto, crie um
          componente funcional chamado ListaProdutos. Este componente deve
          exibir uma lista de produtos usando um array estático e o método map
          para gerar um cartão de produto para cada item. Utilize o seguinte
          array estático para os produtos:
        </p>

        <p>
          O componente ListaProdutos deve utilizar o método map para renderizar
          um componente CartaoProduto para cada item no array. O componente
          CartaoProduto deve incluir: Imagem do Produto Nome do Produto
          Descrição Preço Crie um arquivo CSS chamado CartaoProduto.css para
          estilizar o cartão de produto, garantindo que ele tenha uma aparência
          profissional e organizada.
        </p>
      </div>
      <div className="solucao">
        <h2>Lista de Produtos em Cards de Anúncios:</h2>
        <br />
        <div className="lista-produtos">
          {produtos.map((produto) => (
            <CartaoProduto
              imagem={produto.imagem}
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
