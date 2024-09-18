import React from "react";
import ReactDOM from "react-dom/client";
import StatusBadge from "./components/StatusBadge";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="enunciado">
      <h1>Tarefa 16 - Estilo Condicional</h1>
      <p>
        Crie um componente funcional chamado StatusBadge que exiba um badge de
        status baseado em uma prop chamada status. O badge deve ter um estilo
        diferente dependendo do valor da prop status. Instruções: Defina a Prop
        status: O componente StatusBadge deve aceitar uma prop chamada status
        que pode ter os valores "ativo", "inativo" ou "pendente". Estilos
        Condicionais: Utilize estilos inline ou classes CSS para definir a
        aparência do badge: Se o status for "ativo", o badge deve ter um fundo
        verde e texto branco. Se o status for "inativo", o badge deve ter um
        fundo cinza e texto branco. Se o status for "pendente", o badge deve ter
        um fundo laranja e texto branco. Exibição do Badge: O badge deve exibir
        o texto correspondente ao status. Por exemplo, se o status for "ativo",
        o texto do badge deve ser "Ativo".
      </p>
    </div>

    <div className="solucao">
      <h1>Produtos</h1>
      <StatusBadge status="ativo" />
      <StatusBadge status="inativo" />
      <StatusBadge status="pendente" />
    </div>
  </React.StrictMode>
);
