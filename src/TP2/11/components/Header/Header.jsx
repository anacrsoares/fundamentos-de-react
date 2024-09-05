import style from "./style.module.css";
import logo from "../../assets/img/logo.png";
import Button from "../Button/Button";

export default function Header() {
  return (
    <div>
      <div className={style.navbar}>
        <img src={logo} alt="Logotipo" />

        <ul className={style.nav_menu}>
          <li>Home</li>
          <li>Sobre mim</li>
        </ul>
        <Button />
      </div>
    </div>
  );
}
