import style from "./style.module.css";
export default function Home() {
  return (
    <section className={style.home}>
      <div className={style.home_content}>
        <h2>Bem-vindo à QuantumEdge Creations </h2>
        <p>
          Na QuantumEdge Creations, nossa missão é fornecer soluções inovadoras
          e de alta qualidade que atendem às necessidades dos nossos clientes.
          Com um compromisso inabalável com a excelência, buscamos transformar a
          indústria e criar um impacto positivo na comunidade.
        </p>
        <h3>Nossos Valores</h3>
        <ul>
          <li>
            <strong>Inovação:</strong> Estamos sempre em busca de novas ideias e
            soluções para melhorar nossos produtos e serviços.
          </li>
          <li>
            <strong>Qualidade:</strong> Comprometidos com a entrega de produtos
            e serviços que atendem aos mais altos padrões.
          </li>
          <li>
            <strong>Integridade:</strong> Operamos com honestidade e
            transparência em todas as nossas interações.
          </li>
          <li>
            <strong>Responsabilidade Social:</strong> Trabalhamos para fazer uma
            diferença positiva na comunidade e no meio ambiente.
          </li>
        </ul>
        <p>
          Junte-se a nós em nossa jornada para transformar o futuro e alcançar
          novos patamares de sucesso. Na QuantumEdge Creations, cada passo que
          damos é um passo em direção a um futuro melhor.
        </p>
      </div>
    </section>
  );
}
