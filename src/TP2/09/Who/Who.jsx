import team_member_1 from "../../../img/team_member_1.jpg";
import team_member_2 from "../../../img/team_member_2.jpg";
import style from "./style.module.css";

export default function Who() {
  return (
    <main className={style.who_we_are}>
      <section className={style.history}>
        <h2>Nossa História</h2>
        <p>
          Fundada em 2016, a QuatumEdge Creations começou como uma pequena
          startup com uma grande visão: transformar o setor de produtos
          inovadores. Desde então, temos trabalhado incessantemente para
          oferecer produtos e serviços inovadores que atendem às necessidades de
          nossos clientes.
        </p>
        <p>
          Ao longo dos anos, nossa empresa cresceu e se adaptou às mudanças do
          mercado, sempre mantendo o foco na qualidade e na satisfação do
          cliente. Hoje, somos reconhecidos como líderes em nosso setor, com uma
          equipe dedicada e apaixonada pelo que faz.
        </p>
      </section>
      <section className={style.team}>
        <h2>Conheça Nossa Equipe</h2>
        <div className={style.team_member}>
          <img src={team_member_1} alt="Membro da Equipe 1" />
          <div className={style.team_member_info}>
            <h3>Maria Silva</h3>
            <p>CEO & Fundadora</p>
            <p>
              Maria tem uma vasta experiência em liderança e estratégia de
              negócios. Ela fundou a empresa com o objetivo de criar soluções
              inovadoras para o mercado de [Setor/Indústria].
            </p>
          </div>
        </div>
        <div className={style.team_member}>
          <img src={team_member_2} alt="Membro da Equipe 2" />
          <div className={style.team_member_info}>
            <h3>João Souza</h3>
            <p>Diretor de Operações</p>
            <p>
              João é responsável pela coordenação das operações diárias da
              empresa, garantindo eficiência e qualidade em todos os aspectos do
              nosso trabalho.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
