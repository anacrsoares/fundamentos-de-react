import style from "./style.module.css";

export default function Header() {
  return (
    <header className={style.container_header}>
      <nav>
        <ul>
          <li>QuantumEdge Creations</li>
          <li>Home</li>
          <li>Quem Somos</li>
          <li>Produtos</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
}
