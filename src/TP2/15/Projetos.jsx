export default function Projetos() {
  return (
    <section className="projetos">
      <div className="projeto">
        <h3>Projeto: Food Delivery App</h3>
        <p>
          Desenvolvimento de um aplicativo móvel de entrega de alimentos,
          permitindo que usuários façam pedidos de restaurantes locais,
          rastreiem suas entregas em tempo real e realizem pagamentos online. O
          app foi desenvolvido utilizando React Native para a interface do
          usuário e Node.js para o backend, com integração de APIs para
          processamento de pagamentos.
        </p>
      </div>

      <div className="projeto">
        <h3>Projeto: Personal Finance Manager</h3>
        <p>
          Uma aplicação web desenvolvida para ajudar usuários a gerenciar suas
          finanças pessoais, permitindo o rastreamento de despesas, criação de
          orçamentos mensais e a geração de relatórios financeiros. Utilizando
          React para a interface, com um backend em Python (Django), o projeto
          foca em fornecer uma experiência de usuário intuitiva e relatórios
          claros.
        </p>
      </div>

      <div className="projeto">
        <h3>Projeto: E-commerce de Produtos Sustentáveis</h3>
        <p>
          Criação de uma plataforma de e-commerce dedicada à venda de produtos
          sustentáveis e ecológicos. A loja online permite navegação por
          categorias, filtros avançados de pesquisa, carrinho de compras, e
          integração com plataformas de pagamento. O frontend foi desenvolvido
          com Next.js, enquanto o backend utiliza uma arquitetura serverless com
          AWS Lambda e DynamoDB.
        </p>
      </div>
    </section>
  );
}
