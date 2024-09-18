import React from "react";
import ReactDOM from "react-dom/client";
import Product from "./components/Product ";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="enunciado">
      <h1>Tarefa 15 - Props Opcionais com Valores Padrão</h1>
      <p>
        Crie um componente chamado Product que exibe informações sobre um
        produto, incluindo o nome, preço e uma descrição opcional. Se a
        descrição não for fornecida, exiba "Descrição não disponível".
        Instruções: Implemente o componente Product para exibir o nome e o preço
        do produto. Se uma descrição for fornecida, exiba-a; caso contrário,
        exiba "Descrição não disponível".
      </p>
    </div>

    <div className="solucao">
      <h1>Produtos</h1>
      <div className="container-products">
        <Product
          name="Notebook"
          price={3500}
          description="Laptop de alto desempenho"
        />
        <Product name="Cadeira Gamer" price={1200} />
        <Product
          name="Monitor 4K"
          price={1800}
          description="Monitor Ultra HD de 27 polegadas"
        />
        <Product name="Teclado Mecânico" price={450} />
        <Product
          name="Mouse Sem Fio"
          price={200}
          description="Mouse ergonômico com 6 botões"
        />
        <Product name="Headset Gamer" price={700} />
        <Product
          name="Smartphone"
          price={2500}
          description="Celular de última geração com 128GB"
        />
        <Product name="Impressora Multifuncional" price={650} />
        <Product
          name="Tablet"
          price={1500}
          description="Tablet com tela de 10 polegadas"
        />
        <Product name="Carregador Rápido" price={120} />
        <Product
          name="Smartwatch"
          price={900}
          description="Relógio inteligente com monitor cardíaco"
        />
        <Product name="Controle de Videogame" price={350} />
      </div>
    </div>
  </React.StrictMode>
);
