import style from "./style.module.css";
import companylogo_1 from "../../assets/img/companylogo_1.png";
import companylogo_2 from "../../assets/img/companylogo_2.png";
import companylogo_3 from "../../assets/img/companylogo_3.png";
import companylogo_4 from "../../assets/img/companylogo_4.png";
import companylogo_5 from "../../assets/img/companylogo_5.png";
import companylogo_6 from "../../assets/img/companylogo_6.png";

export default function Companies() {
  return (
    <section className={style.companies}>
      <h2 id="companies">Empresas que Contribuí</h2>
      <div className={style.companies_scroll}>
        <div className={style.companies_vw}>
          <div className={style.company_card}>
            <img src={companylogo_1} />
          </div>
          <div className={style.company_card}>
            <img src={companylogo_2} />
          </div>
          <div className={style.company_card}>
            <img src={companylogo_3} />
          </div>
          <div className={style.company_card}>
            <img src={companylogo_4} />
          </div>
          <div className={style.company_card}>
            <img src={companylogo_5} />
          </div>
          <div className={style.company_card}>
            <img src={companylogo_6} />
          </div>

          <div className={style.company_card}>
            <img src={companylogo_1} />
          </div>
          <div className={style.company_card}>
            <img src={companylogo_2} />
          </div>
          <div className={style.company_card}>
            <img src={companylogo_3} />
          </div>
          <div className={style.company_card}>
            <img src={companylogo_4} />
          </div>
          <div className={style.company_card}>
            <img src={companylogo_5} />
          </div>
          <div className={style.company_card}>
            <img src={companylogo_6} />
          </div>
        </div>
      </div>
    </section>
  );
}
