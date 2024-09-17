import style from "./style.module.css";
import eu from "../../assets/img/eu.jpg";

export default function Habilities() {
  return (
    <div className={style.habilities}>
      <div className={style.habilities_title}>
        <h2 id="habilities_title">Minhas Habilidades</h2>

        <div className={style.drop}></div>
      </div>

      <div className={style.habilities_info}>
        <div className={style.habilities_info_left}>
          <img src={eu} alt="Foto de Perfil" />
        </div>

        <div className={style.habilities_info_right}>
          <div className={style.hability}>
            <p>HTML & CSS</p> <hr style={{ width: "60%" }} />
          </div>
          <div className={style.hability}>
            <p>React JS</p>
            <hr style={{ width: "70%" }} />
          </div>
          <div className={style.hability}>
            <p>JavaScript</p>
            <hr style={{ width: "60%" }} />
          </div>
          <div className={style.hability}>
            <p>Python</p>
            <hr style={{ width: "80%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
