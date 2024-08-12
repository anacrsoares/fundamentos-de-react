import Cabecalho from "./Cabecalho.jsx";
import Projetos from "./Projetos.jsx";
import Contatos from "./Contatos.jsx";

export default function Portfolio() {
  return (
    <div>
      <div className="enunciado">
        <h1>Exercício 15 - Criar um Portfólio com React</h1>

        <p>
          Crie um novo projeto React utilizando Vite. Dentro do projeto, crie um
          componente funcional chamado Portfólio que exiba um portfólio simples
          com as seguintes seções estáticas: Cabeçalho: Um título com o nome do
          portfólio (por exemplo, "Meu Portfólio"). Um subtítulo com uma breve
          descrição (por exemplo, "Desenvolvedor Front-end com experiência em
          React"). Projetos: Uma seção que liste três projetos fictícios com
          títulos e descrições curtas. Contatos: Uma seção que exiba informações
          de contato fictícias (por exemplo, e-mail e redes sociais). Os itens
          de Cabeçalho, Projetos e Contatos, devem ser criados em componentes
          isolados e chamados no arquivo App.js.
        </p>
      </div>
      <div className="solucao">
        <Cabecalho />
        <Projetos />
        <Contatos />
      </div>
    </div>
  );
}
