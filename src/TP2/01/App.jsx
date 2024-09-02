import image_placeholder from "../../img/image_placeholder.png";

export default function ComponeteBasico() {
  return (
    <div>
      <div className="enunciado">
        <h1>Exercício 1 - Criando um componente básico</h1>
        <p>
          Implemente um componente simples com React JS. Neste componente você
          deverá implementar: Uma imagem qualquer; Um título;
        </p>
      </div>

      <div className="solucao">
        <div className="container_image">
          <img src={image_placeholder} />
        </div>

        <h2> Título 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quia
          laudantium. Iure eos esse temporibus doloremque? Laudantium saepe
          culpa, ullam ipsam sit ut vitae! Vel tempore rerum delectus
          voluptatibus quae? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aut, quia laudantium. Iure eos esse temporibus doloremque?
          Laudantium saepe culpa, ullam ipsam sit ut vitae! Vel tempore rerum
          delectus voluptatibus quae? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aut, quia laudantium. Iure eos esse temporibus
          doloremque? Laudantium saepe culpa, ullam ipsam sit ut vitae! Vel
          tempore rerum delectus voluptatibus quae? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aut, quia laudantium. Iure eos esse
          temporibus doloremque? Laudantium saepe culpa, ullam ipsam sit ut
          vitae! Vel tempore rerum delectus voluptatibus quae? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Aut, quia laudantium. Iure eos
          esse temporibus doloremque? Laudantium saepe culpa, ullam ipsam sit ut
          vitae! Vel tempore rerum delectus voluptatibus quae?
        </p>
      </div>
    </div>
  );
}
