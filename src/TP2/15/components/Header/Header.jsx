import style from "./style.module.css";
import logo from "../../assets/img/logo.png";
import Button from "../Button/Button";

export default function Header() {
  return (
    <div>
      <div className={style.navbar}>
        <img src={logo} alt="Logotipo" />

        <ul className={style.nav_menu}>
          <li>
            <a href="#habilities_title">Habilidades</a>
          </li>

          <li>
            <a href="#companies">Empresas</a>
          </li>

          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <Button />
      </div>
    </div>
  );
}
