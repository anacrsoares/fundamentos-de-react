import style from "./style.module.css";
import image_placeholder from "../../../img/image_placeholder.png";

export default function Header() {
  return (
    <div className={style.container_header}>
      <img src={image_placeholder} />

      <h2>Header</h2>
    </div>
  );
}
