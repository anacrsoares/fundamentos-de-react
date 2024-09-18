import React from "react";
import ReactDOM from "react-dom/client";
import ProfileCard from "./components/ProfileCard";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="enunciado">
      <h1>Tarefa 14 - Props Opcionais</h1>
      <p>
        Crie um componente chamado ProfileCard que exibe o nome e a idade de um
        usuário. A propriedade age é opcional e, caso não seja fornecida, deve
        ser exibida uma mensagem indicando que a idade não está disponível.
        Instruções: Implemente o componente ProfileCard para exibir o nome do
        usuário e sua idade, se fornecida. Caso contrário, exiba a mensagem
        "Idade não disponível".
      </p>
    </div>

    <div className="solucao">
      <h1>Perfis de Usuário</h1>
      <ProfileCard name="Ana" age={25} />
      <ProfileCard name="Carlos" />
    </div>
  </React.StrictMode>
);
