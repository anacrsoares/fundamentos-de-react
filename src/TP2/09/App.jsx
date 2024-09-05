export default function App() {
  const objProdutos = agruparPorCategoria(produtos);
  return (
    <div>
      <div className="enunciado">
        <h1>Exercício 9 - Landing page responsiva</h1>
        <p>
          Neste exercício, você terá a oportunidade de aprimorar suas
          habilidades em design responsivo, adaptando o template desenvolvido
          anteriormente (exercício 8) para garantir uma experiência de usuário
          consistente em dispositivos menores, como smartphones e tablets.
        </p>

        <p>
          Desafio: Você recebeu um template de landing page que foi desenvolvido
          para dispositivos de tela padrão. Agora, sua missão é ajustar esse
          template para que ele seja responsivo e se adapte de forma adequada em
          dispositivos menores, mantendo a usabilidade e a estética da página.
        </p>

        <p>
          Instruções: Analise o template fornecido no exercício anterior e
          identifique áreas que precisam ser ajustadas para melhorar a
          experiência em dispositivos menores. Utilize media queries em seu
          arquivo styles.css para aplicar estilos específicos que sejam
          adequados para dispositivos de tela pequena. Adapte o layout e os
          componentes conforme necessário para garantir uma apresentação
          agradável e funcional em dispositivos móveis.
        </p>
      </div>

      {/* <div className="solucao">
        <pre>{JSON.stringify(objProdutos, null, 2)}</pre>
      </div> */}
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
