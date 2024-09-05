import style from "./style.module.css";
import product_1 from "../../../img/product_1.webp";
import product_2 from "../../../img/product_2.jpg";
import product_3 from "../../../img/product_3.jpg";

export default function Products() {
  return (
    <section className={style.products}>
      <h2>Nossos Produtos</h2>
      <div className={style.product_list}>
        <div className={style.product_item}>
          <img src={product_1} alt="Produto 1" />
          <h3>Produto Inovador A</h3>
          <p>
            O Produto Inovador A é uma solução revolucionária que combina
            tecnologia de ponta com design elegante, garantindo performance
            excepcional para as suas necessidades.
          </p>
          <a href="#" className="btn">
            Saiba Mais
          </a>
        </div>

        <div className={style.product_item}>
          <img src={product_2} alt="Produto 2" />
          <h3>Serviço Personalizado B</h3>
          <p>
            Nosso Serviço Personalizado B oferece consultoria especializada para
            atender às suas demandas, com uma abordagem que une expertise e
            flexibilidade.
          </p>
          <a href="#" className="btn">
            Saiba Mais
          </a>
        </div>

        <div className={style.product_item}>
          <img src={product_3} alt="Produto 3" />
          <h3>Produto de Alta Performance C</h3>
          <p>
            Com o Produto de Alta Performance C, você experimenta eficiência
            máxima em suas operações, otimizando resultados com tecnologia de
            última geração.
          </p>
          <a href="#" className="btn">
            Saiba Mais
          </a>
        </div>
      </div>
    </section>
  );
}
