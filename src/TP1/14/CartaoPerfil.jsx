import "./CartaoPerfil.css";

export default function CartaoPerfil() {
  return (
    <div className="card">
      <img
        src="https://img.freepik.com/fotos-gratis/garoto-confiante-posando-contra-a-parede-branca_176420-32936.jpg?t=st=1723313138~exp=1723316738~hmac=3ffe9a2043ad2ae47061e016afb431ce46e9218824aa8308ecd65f085596a04c&w=740"
        alt="foto-de-perfil"
      />
      <div className="info-perfil">
        <h2 className="nome-usuario">Manoel da Silva Fonseca</h2>
        <p className="biografia">
          Desenvolvedor de Software, apaixonado por tecnologia e atuando no
          mercado de TI há 5 anos como desenvolvedor Java backend.
        </p>
      </div>
    </div>
  );
}
