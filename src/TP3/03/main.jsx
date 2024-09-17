import React from "react";
import ReactDOM from "react-dom/client";
import Greetings from "./App.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="enunciado">
      <h1>Tarefa 3 - Atualizando Props</h1>
      <p>
        Modifique o componente <code>Greeting</code> criado na Questão 1 para
        aceitar uma prop adicional chamada <code>age</code>. O componente deve
        exibir a saudação e a idade da seguinte forma: "Olá, &#123;name&#125;!
        Você tem &#123;age&#125; anos.". Instruções: Atualize o componente{" "}
        <code>Greeting</code> para receber a prop <code>age</code>. Exiba a
        saudação com o nome e a idade passados como props no formato "Olá,
        &#123;name&#125;! Você tem &#123;age&#125; anos.".
      </p>
    </div>
    <Greetings name="João" age="50" />
    <Greetings name="Maria" age="51" />
    <Greetings name="Manoel" age="20" />
    <Greetings name="José" age="40" />
  </React.StrictMode>
);
