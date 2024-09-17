import style from "./style.module.css";
import eu from "../../assets/img/eu.jpg";

export default function SobreMim() {
  return (
    <div className={style.about_me}>
      {/* <h1>Sobre Mim</h1> */}
      <img src={eu} alt="Foto de Perfil" />
      <h2>
        Olá, meu nome é <span>Ana Carolina</span>, desenvolvedora Brasileira
      </h2>
      <p>
        Sou estudante de Engenharia de Software pelo pelo Instituto Infnet e
        atuo na área de tecnologia há três anos como Engenheira de Dados 👾.
      </p>
    </div>
  );
}
