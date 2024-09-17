import { useState } from "react";

export default function Greetings(props) {
  return (
    <div>
      <div className="enunciado">
        <div className="solucao">
          <h1>
            Olá, {props.name}! Você tem {props.age} anos.
          </h1>
        </div>
      </div>
    </div>
  );
}
