import image_placeholder from "../../img/image_placeholder.png";
import note_1 from "../../img/note_1.avif";
import note_2 from "../../img/note_2.avif";
import note_3 from "../../img/note_3.webp";
import note_4 from "../../img/note_4.avif";

export default function StylesInLine() {
  return (
    <div>
      <div className="enunciado">
        <h1>Exercício 2 - Componente com styles inline</h1>

        <p>
          Implemente um componente simples utilizando React JS que representa um
          portfólio de um produto qualquer (por exemplo da coca-cola). Este
          componente deverá seguir, obrigatoriamente, o layout apresentado na
          imagem abaixo, contendo: 4 Imagens do Produto escolhido; Descrição do
          produto escolhido.
        </p>
      </div>

      <div className="solucao">
        <div className="container_images">
          <img src={note_1} />
          <img src={note_2} />
          <img src={note_3} />
        </div>

        <div className="container_details">
          <img src={note_4} />

          <div className="container_content">
            <h2>Notebook Gamer XPower GX15</h2>
            <p>
              O Notebook Gamer XPower GX15 é uma máquina projetada para
              redefinir a experiência de jogo e multitarefa. Desenvolvido para
              jogadores exigentes e profissionais que buscam desempenho sem
              compromissos, este notebook combina poder de processamento de
              última geração, gráficos impressionantes e uma construção robusta
              em um design elegante e moderno. Desempenho Inigualável No coração
              do XPower GX15 bate um processador Intel Core i9 de 13ª geração
              com 16 núcleos e 24 threads, oferecendo velocidades que alcançam
              até 5.2 GHz com tecnologia Turbo Boost. Isso significa que você
              terá desempenho suficiente para rodar os jogos mais recentes e
              pesados, realizar streaming, editar vídeos em 4K e muito mais,
              tudo simultaneamente e sem engasgos. Gráficos Avançados Equipado
              com uma GPU NVIDIA GeForce RTX 4080 com 16 GB de VRAM GDDR6, o
              XPower GX15 entrega gráficos ultra-realistas com suporte completo
              para Ray Tracing e DLSS. Cada detalhe dos seus jogos favoritos
              ganha vida, com sombras, reflexos e iluminação impressionantes,
              garantindo uma experiência imersiva que te coloca diretamente no
              centro da ação. Tela de Alta Qualidade A experiência visual é
              levada a outro nível com a tela IPS de 15,6 polegadas do GX15, que
              oferece uma resolução 4K (3840x2160) e uma taxa de atualização de
              240 Hz. Com uma gama de cores 100% sRGB e suporte HDR, as cores
              são vibrantes e precisas, enquanto a alta taxa de atualização
              proporciona movimentos suaves, sem borrões, para que você não
              perca nenhum detalhe durante as partidas mais intensas.
              Resfriamento Avançado Manter um desempenho estável durante longas
              sessões de jogo é crucial, e é por isso que o XPower GX15 vem
              equipado com um sistema de resfriamento avançado de múltiplas
              zonas, utilizando tecnologia de câmaras de vapor e ventoinhas de
              alta eficiência. Este sistema garante que o notebook permaneça em
              temperaturas ideais, mesmo sob carga máxima, evitando o thermal
              throttling e garantindo que você possa jogar por horas sem
              comprometer o desempenho. Armazenamento e Memória Com 32 GB de RAM
              DDR5, o GX15 oferece velocidade e capacidade de resposta
              excepcionais, permitindo multitarefa sem esforço. O armazenamento
              não fica atrás: um SSD NVMe de 2 TB proporciona espaço de sobra
              para seus jogos, aplicativos e arquivos, com tempos de
              carregamento ultrarrápidos que reduzem significativamente a espera
              para entrar no jogo ou abrir grandes projetos de trabalho.
              Conectividade de Última Geração O XPower GX15 vem equipado com uma
              ampla gama de opções de conectividade para atender a todas as suas
              necessidades. Inclui portas USB-C com Thunderbolt 4, USB-A 3.2,
              HDMI 2.1, leitor de cartão SD e uma porta Ethernet de 2,5 Gbps.
              Além disso, a conectividade sem fio é garantida com Wi-Fi 6E e
              Bluetooth 5.3, proporcionando velocidades de rede rápidas e
              estáveis, seja para gaming online ou streaming de alta qualidade.
              Design e Construção O design do GX15 combina estética e
              funcionalidade. Com uma estrutura em alumínio escovado, o notebook
              é ao mesmo tempo robusto e elegante, oferecendo durabilidade sem
              sacrificar o estilo. O teclado mecânico retroiluminado RGB
              personalizável oferece uma resposta tátil excelente e uma
              experiência de digitação precisa, perfeita tanto para jogos quanto
              para trabalho. Bateria e Mobilidade Apesar de todo o poder sob o
              capô, o XPower GX15 não sacrifica a portabilidade. Com uma bateria
              de 99 Wh, o notebook oferece até 8 horas de uso misto, permitindo
              que você leve seus jogos e trabalho para onde precisar, sem estar
              preso a uma tomada. O carregamento rápido garante que você volte à
              ação em pouco tempo. Áudio Imersivo O sistema de som é outro ponto
              alto do XPower GX15. Com alto-falantes estéreo premium, som Dolby
              Atmos e um subwoofer integrado, ele oferece áudio de alta
              fidelidade, proporcionando uma experiência sonora rica e imersiva,
              seja para jogos, filmes ou música. A tecnologia de cancelamento de
              ruído ativa dos microfones também garante que suas comunicações em
              equipe sejam claras e sem interferências. Software e Segurança O
              XPower GX15 vem pré-instalado com o Windows 11 Pro, oferecendo uma
              interface moderna e otimizada para produtividade e jogos. Além
              disso, o notebook inclui um conjunto de software de segurança,
              como reconhecimento facial com Windows Hello, leitor de impressões
              digitais e criptografia de dados para garantir que suas
              informações estejam sempre protegidas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
